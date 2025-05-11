import React from 'react'
import replyIcon from '/src/assets/chat-area/reply.svg'
import { dateToTime } from '../../utils/formatter'
import StatusTick from '../StatusTick'
import { useSelector } from 'react-redux'

export default function TextMessage({
  chatId,
  createdAt,
  deleted,
  link,
  receipt,
  repliedTo,
  sender,
  text,
  type,
  _id
}) {
  const user = useSelector(state => state.user)
  const senderMe = user._id == sender._id

  function getMessageStatus() {
    if (receipt && senderMe) {
      return receipt.every(item => item.status === 'seen') ? 'seen' :
        receipt.every(item => item.status === 'received') ? 'received' : 'sent';
    }
  }

  return (
    <div className={`flex items-centers gap-2 ${senderMe ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`${senderMe ? 'bg-black text-white justify-end' : 'bg-white text-black justify-start'} relative rounded-xl shadow-2xl p-4 max-w-md`}>
        <p className='text-sm'>{text}</p>
        <div className={`flex mt-2 ${senderMe ? 'justify-end' : 'justify-start'}`}>
          <span className={`text-placeholder text-xs`}>{dateToTime(createdAt)}</span>
        </div>
      </div>
      <div className='flex flex-column items-center relative'>
        <img src={replyIcon} alt="reply" className={`w-5 aspect-square cursor-pointer ${senderMe ? 'scale-x-[-1]' : ''}`} />
        {senderMe &&
          <div className='absolute bottom-0'>
            <StatusTick status={getMessageStatus()} />
          </div>
        }
      </div>
    </div>
  )
}