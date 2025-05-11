import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchGlass from '/src/assets/search-glass.svg'
import SelectUserModal from './SelectUserModal'
import { openPersonalInfo } from '../app/mainWindowSlice'
import { PLACEHOLDER_AVATAR } from '../utils/constants'

function UserCard() {
  const user = useSelector(state => state.user)
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  if (!user) return null

  return (
    <>
      <div className='flex flex-col items-start justify-start p-4'>
        <div className='flex flex-row items-start justify-between w-full'>
          <div className='flex items-center gap-2'>
            <img src={user.profilePicture || PLACEHOLDER_AVATAR} alt="profile picture" className='h-12.5 w-12.5 rounded-full' />
            <div className='flex flex-col ml-2.5'>
              <h2 className='font-bold text-xl text-ellipsis'>{user.name}</h2>
              <p className='text-sm text-[#b3b3b3]'>{user.email}</p>
            </div>
          </div>

          <img src={searchGlass} alt='search glass icon' className='ml-2.5 mt-3 cursor-pointer' onClick={() => setModal(true)} />
        </div>
        <hr className='m-auto w-full mt-5 h-0.25 border-t border-[#eaeaea]' />
      </div>
      {modal && <SelectUserModal
        mode="personal"
        onClose={() => setModal(false)}
        onNext={(_id) => {
          dispatch(openPersonalInfo(_id))
          setModal(false)
        }}
      />}
    </>
  )
}

export default UserCard
