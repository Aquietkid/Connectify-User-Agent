import React, { useRef, useState } from 'react'
import replyIcon from '/src/assets/chat-area/reply.svg'
import { dateToTime, numberToDuration } from '../../utils/formatter'
import StatusTick from '../StatusTick'
import AudioVisualizer from './AudioVisualizer'
import Play from '../../icons/Play'
import Pause from '../../icons/Pause'
import Audio from '../../icons/Audio'

export default function VoiceMessage() {
  const [playing, setPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(null);

  const senderMe = false
  const wavesurferRef = useRef(null);

  const togglePlay = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
      setPlaying(wavesurferRef.current.isPlaying())
    }
  };

  function togglePlaybackSpeed() {
    if (playbackSpeed == 1) {
      setPlaybackSpeed(1.5)
    } else if (playbackSpeed == 1.5) {
      setPlaybackSpeed(2)
    } else {
      setPlaybackSpeed(1)
    }
  }

  return (
    <div className={`flex items-centers gap-2 ${senderMe ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`${senderMe ? 'bg-black text-white justify-end' : 'bg-white text-black justify-start'} relative rounded-xl shadow-2xl p-4 w-md`}>
        <div className={`flex items-center gap-2 ${senderMe ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className='w-[80px] rounded-full relative cursor-pointer' onClick={togglePlaybackSpeed}>
            <span className='w-full h-full bg-black/50 text-white absolute top-0 left-0 flex items-center justify-center opacity-0 hover:opacity-100 rounded-full'>{playbackSpeed}x</span>
            <img src="https://res.cloudinary.com/dj3vgnj0u/image/upload/v1745992751/connectify/ffa9uxb34iv9v1mdzfyq.jpg" alt="avatart" className='w-full h-full aspect-square rounded-full' />
            <span className={`absolute top-[70%] left-0`}>
              <Audio color='#bebebe'
                width={30}
                height={30}
                borderColor={senderMe ? '#000' : '#fff'}
              />
            </span>
          </div>
          <div className='flex items-center gap-2 w-full'>
            <span className='text-white cursor-pointer' onClick={togglePlay}>
              {!playing ? <Play width={30} height={30} color={senderMe ? '#fff' : '#000'} /> : <Pause width={30} height={30} color={senderMe ? '#fff' : '#000'} />}
            </span>
            <AudioVisualizer
              wavesurferRef={wavesurferRef}
              audioRate={playbackSpeed}
              onFinish={() => setPlaying(false)}
              src="https://res.cloudinary.com/dj3vgnj0u/video/upload/v1746728024/connectify/fpofno9k8nsfrolvpm85.mp3"
              progressColor={senderMe ? "#fff" : "#000"}
              onReady={(duration) => setTotalDuration(duration)}
              onTimeUpdate={(time) => setCurrentTime(time)}
            />
          </div>
        </div>
        <div className={`flex mt-2 justify-between`}>
          <span className={`text-placeholder text-xs`}>{numberToDuration(playing ? currentTime : totalDuration)}</span>
          <span className={`text-placeholder text-xs`}>{dateToTime('2025-05-10T11:57:32.503Z')}</span>
        </div>
      </div>
      <div className='flex flex-column items-center relative'>
        <img src={replyIcon} alt="reply" className={`w-5 aspect-square cursor-pointer ${senderMe ? 'scale-x-[-1]' : ''}`} />
        {senderMe &&
          <div className='absolute bottom-0'>
            <StatusTick status="received" />
          </div>
        }
      </div>
    </div >
  )
}