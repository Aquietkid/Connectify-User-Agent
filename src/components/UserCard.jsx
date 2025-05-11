import React from 'react'
import { useSelector } from 'react-redux'
import Search from '../icons/Search'

function UserCard() {
  const { user } = useSelector(state => state.user)

  if (!user) return null

  return (
    <div className='flex flex-col items-start justify-start'>
      <div className='flex flex-row items-start justify-start mt-10.25 ml-5.75'>
        <img src={user.profilePicture || 'src/assets/alex.png'} alt="profile picture" className='h-12.5 w-12.5' />
        <div className='flex flex-col ml-2.5'>
          <h2 className='font-bold text-xl text-ellipsis'>{user.name}</h2>
          <p className='text-sm text-[#b3b3b3]'>{user.email}</p>
        </div>
        <Search className='ml-2.5 mt-3 w-5 h-5' />
      </div>
      <hr className='m-auto w-[90%] mt-5 h-0.25 border-t border-[#eaeaea]' />
    </div>
  )
}

export default UserCard
