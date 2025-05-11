import React, { useEffect, useState } from 'react';
import replyIcon from '/src/assets/chat-area/reply.svg'
import { dateToTime } from '../../utils/formatter';
import StatusTick from '../StatusTick';
import { generateVideoThumbnail } from 'generate-video-dumbnail';
import Play from '../../icons/Play';
import Cross from '../../icons/Cross';
import CrossButton from '../CrossButton';
import { useSelector } from 'react-redux';

export default function VideoMessage({
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

  const [thumbnail, setThumbnail] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(state => state.user)
  const senderMe = user._id == sender._id

  useEffect(() => {
    async function getThumbnail() {
      const thumbnailUrl = await generateVideoThumbnail(link, 3, {
        format: 'image/jpeg',
        quality: 0.88,
      });
      setThumbnail(thumbnailUrl);
    }

    getThumbnail();
  }, []);

  function getMessageStatus() {
    if (receipt && senderMe) {
      return receipt.every(item => item.status === 'seen') ? 'seen' :
        receipt.every(item => item.status === 'received') ? 'received' : 'sent';
    }
  }

  if (!thumbnail) return null;

  return (
    <div>
      <div className={`flex items-centers gap-2 ${senderMe ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`${senderMe ? 'bg-black text-white justify-end' : 'bg-white text-black justify-start'} relative rounded-xl shadow-2xl p-2 max-w-md`}>
          <div className='relative'>
            <img
              src={thumbnail}
              alt="video message thumbnail"
              className="h-[400px] rounded-md bg-placeholder"
            />
            <div
              className='bg-black/50 w-full h-full absolute top-0 left-0 rounded-md flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300'
              onClick={() => setShowModal(true)}
            >
              <Play width={40} height={40} color='#fff' />
            </div>
          </div>
          <div className={`flex mt-2 ${senderMe ? 'justify-end' : 'justify-start'}`}>
            <span className="text-placeholder text-xs">{dateToTime(createdAt)}</span>
          </div>
        </div>
        <div className="flex flex-column items-center relative">
          <img src={replyIcon} alt="reply" className={`w-5 aspect-square cursor-pointer ${senderMe ? 'scale-x-[-1]' : ''}`} />
          {senderMe && (
            <div className="absolute bottom-0">
              <StatusTick status={getMessageStatus()} />
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-white/95 z-50 p-4 opacity-0"
          style={{ animation: 'fadeIn 0.3s forwards' }}
        >
          <div className='flex justify-between'>
            <div className='flex items-start gap-3'>
              <div className='w-[50px] aspect-square'>
                <img
                  src={sender.profilePicture}
                  alt="avatar"
                  className='w-full h-full aspect-square rounded-full'
                />
              </div>
              <div>
                <p>{sender.name}</p>
                <span className='text-placeholder text-sm'>{dateToTime(createdAt)}</span>
              </div>
            </div>
            <CrossButton
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className='flex justify-center h-[90%] p-2'>
            <video src={link} className='h-full' controls autoPlay />
          </div>
        </div>
      )}
    </div>
  );
}
