import React, { useContext } from 'react'
import CrossButton from '../CrossButton'
import { ChatAreaContext } from '../../context/ChatAreaContext'

export default function C() {
  const { preview, closePreview } = useContext(ChatAreaContext)

  return (
    <div
      className='opacity-0 h-full'
      style={{ animation: 'fadeIn 0.3s forwards' }}
    >
      <div className='flex justify-end'>
        <CrossButton
          onClick={() => closePreview()}
        />
      </div>
      {preview.type == "image" ?
        <img
          src={URL.createObjectURL(preview.blob)}
          alt="image"
          className='h-4/5 rounded-md mx-auto'
        /> :
        <video
          src={URL.createObjectURL(preview.blob)}
          className='h-4/5 rounded-md mx-auto'
          controls
        />
      }
    </div>
  )
}
