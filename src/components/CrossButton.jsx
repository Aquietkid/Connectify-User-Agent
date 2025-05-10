import React from 'react'
import Cross from '../icons/Cross'

export default function CrossButton({ onClick }) {
  return (
    <div
      className='text-black p-4 rounded-full shadow-2xl cursor-pointer w-fit'
      onClick={onClick}
    >
      <Cross width={30} height={30} />
    </div>
  )
}
