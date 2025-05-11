import React, { useEffect, useState } from 'react'
import CrossButton from './CrossButton'
import { CiSearch } from 'react-icons/ci'
import { getAllUsers } from '../api/user';
import { PLACEHOLDER_AVATAR } from '../utils/constants';


// mode : "group" | "personal"
export default function SelectUserModal({ mode, onClose, onNext }) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getAllUsers();
      setData(res.data);
    })();
  }, []);

  const filteredData = data.filter(item =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.about?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg-black/20 w-screen h-screen fixed z-50 top-0 left-0 flex items-center justify-center'
      style={{ animation: 'fadeIn 0.3s forwards' }}
      onClick={() => onClose() || (() => { })}
    >
      <div className='rounded-3xl bg-white w-[80%] h-[90%] max-h-[700px] flex flex-col overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className='p-4 flex justify-end'>
          <CrossButton onClick={onClose || (() => { })} />
        </div>

        {/* Search bar */}
        <div className='px-6 pb-4'>
          <div className='border-b border-gray-300 flex items-center gap-2 pb-3'>
            <input
              type="text"
              className='w-full outline-none py-2 px-3'
              placeholder='Search users'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CiSearch size={24} color='#bebebe' />
          </div>
        </div>

        {/* Scrollable user list */}
        <div className='px-6 overflow-y-auto flex-1'>
          {filteredData.length > 0 ? (
            <div className='space-y-3 pr-2'>
              {filteredData.map((item, key) => (
                <div key={key} className='flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg'
                  onClick={mode == "personal" ? () => onNext(item._id) : undefined}
                >
                  <div className='flex gap-3 items-center'>
                    <img
                      src={item.profilePicture || PLACEHOLDER_AVATAR}
                      alt={item.name}
                      className='w-[50px] h-[50px] object-cover rounded-full'
                    />
                    <div>
                      <h4 className='font-medium'>{item.name}</h4>
                      <p className='text-placeholder text-sm line-clamp-1'>{item.about}</p>
                    </div>
                  </div>
                  {mode == "group" &&
                    <input
                      type="checkbox"
                      name={`user-${item._id}`}
                      id={`user-${item._id}`}
                      onClick={(e) => {
                        if (e.target.checked) {
                          setSelectedUsers(prev => [...prev, item._id])
                        } else {
                          setSelectedUsers(prev => prev.filter(_item => item._id == _item._id))
                        }
                      }}
                      className='w-5 h-5 accent-black cursor-pointer'
                    />
                  }
                </div>
              ))}
            </div>
          ) : (
            <div className='flex items-center justify-center h-full'>
              <p className='text-gray-500'>No users found</p>
            </div>
          )}
        </div>

        {/* Footer with button - FIXED at bottom */}
        {mode == "group" &&
          <div className='px-6 py-4 mt-auto'>
            <div className='flex justify-end'>
              <button
                className='bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors'
              >
                Next
              </button>
            </div>
          </div>
        }
      </div>
    </div >
  )
}