import React from 'react'
import Reply from '../../icons/Reply'
import { dateToTime } from '../../utils/formatter'
import StatusTick from '../StatusTick'

export default function TextMessage() {
  const senderMe = true
  return (
    <div className={`flex items-centers gap-2 ${senderMe ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`${senderMe ? 'bg-black text-white justify-end' : 'bg-white text-black justify-start'} relative rounded-xl shadow-2xl p-4 max-w-md`}>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nobis?</p>
        <div className={`flex mt-2 ${senderMe ? 'justify-end' : 'justify-start'}`}>
          <span className={`text-placeholder text-xs`}>{dateToTime('2025-05-10T11:57:32.503Z')}</span>
        </div>
      </div>
      <div className='flex flex-column items-center relative'>
        <Reply className={`w-5 aspect-square cursor-pointer ${senderMe ? 'scale-x-[-1]' : ''}`} />
        {senderMe &&
          <div className='absolute bottom-0'>
            <StatusTick status="received" />
          </div>
        }
      </div>
    </div>
  )
}