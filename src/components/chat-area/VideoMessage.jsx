import React, { useEffect, useState } from 'react';
import Reply from '../../icons/Reply';
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
    <div className={`flex items-centers gap-2 ${senderMe ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`${senderMe ? 'bg-black text-white justify-end' : 'bg-white text-black justify-start'} relative rounded-xl shadow-2xl p-4 max-w-md`}>
        <div className="relative">
          <img src={thumbnail} alt="video thumbnail" className="w-full h-48 object-cover rounded-lg" />
          <button
            onClick={() => setShowModal(true)}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
          >
            <Play className="w-12 h-12 text-white" />
          </button>
        </div>
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

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-3/4 h-3/4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10"
            >
              <Cross className="w-8 h-8 text-white" />
            </button>
            <video
              src={MY_VIDEO_URL}
              controls
              className="w-full h-full rounded-lg"
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
}
