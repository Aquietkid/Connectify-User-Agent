import React, { useEffect, useState } from 'react';
import replyIcon from '/src/assets/chat-area/reply.svg';
import { dateToTime } from '../../utils/formatter';
import StatusTick from '../StatusTick';
import { generateVideoThumbnail } from 'generate-video-dumbnail';
import Play from '../../icons/Play';
import Cross from '../../icons/Cross';
import CrossButton from '../CrossButton';

export default function VideoMessage() {
  const [thumbnail, setThumbnail] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const senderMe = false;

  const MY_VIDEO_URL = 'https://res.cloudinary.com/dj3vgnj0u/video/upload/v1746727709/connectify/x3kef2yycumgqvqdkfif.mp4';
  const THUMBNAIL_POSITION = 3;

  useEffect(() => {
    async function getThumbnail() {
      const thumbnailUrl = await generateVideoThumbnail(MY_VIDEO_URL, THUMBNAIL_POSITION, {
        format: 'image/jpeg',
        quality: 0.88,
      });
      setThumbnail(thumbnailUrl);
    }

    getThumbnail();
  }, []);

  if (!thumbnail) return null;

  return (
    <>
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
            <span className="text-placeholder text-xs">{dateToTime('2025-05-10T11:57:32.503Z')}</span>
          </div>
        </div>
        <div className="flex flex-column items-center relative">
          <img src={replyIcon} alt="reply" className={`w-5 aspect-square cursor-pointer ${senderMe ? 'scale-x-[-1]' : ''}`} />
          {senderMe && (
            <div className="absolute bottom-0">
              <StatusTick status="received" />
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
                  src="https://res.cloudinary.com/dj3vgnj0u/image/upload/v1745992751/connectify/ffa9uxb34iv9v1mdzfyq.jpg"
                  alt="avatar"
                  className='w-full h-full aspect-square rounded-full'
                />
              </div>
              <div>
                <p>Captain America</p>
                <span className='text-placeholder text-sm'>{dateToTime('2025-05-10T11:57:32.503Z')}</span>
              </div>
            </div>
            <CrossButton
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className='flex justify-center h-[90%] p-2'>
            <video src={MY_VIDEO_URL} className='h-full' controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
}
