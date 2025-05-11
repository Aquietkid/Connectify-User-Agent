import React from 'react'

function SkeletonChatCard() {
  return (
    <div className='flex items-start w-full p-5 animate-pulse'>
      <div className='bg-placeholder w-[50px] aspect-square rounded-full' />

      <div className='flex flex-col ml-2.5 w-[60%] gap-2'>
        <div className='bg-placeholder h-4 w-3/4 rounded'></div>
        <div className='bg-placeholder h-3 w-5/6 rounded'></div>
      </div>

      <div className='flex flex-col ml-auto items-end justify-between h-full gap-2'>
        <div className='bg-placeholder h-3 w-10 rounded'></div>
        <div className='bg-placeholder h-5 w-5 rounded-full'></div>
      </div>
    </div>
  )
}

export default SkeletonChatCard
