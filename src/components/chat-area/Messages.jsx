import React, { useContext } from 'react'
import { ChatAreaContext } from '../../context/ChatAreaContext'
import TextMessage from './TextMessage';
import VoiceMessage from './VoiceMessage';
import VideoMessage from './VideoMessage';
import PictureMessage from './PictureMessage';

export default function Messages() {
  const { messages } = useContext(ChatAreaContext);

  return (
    <div className='space-y-2'>
      {
        messages.map((message, key) => {
          switch (message.type) {
            case "text":
              return <TextMessage key={key} {...message} />
            case "audio":
              return <VoiceMessage key={key} {...message} />
            case "video":
              return <VideoMessage key={key} {...message} />
            case "image":
              return <PictureMessage key={key} {...message} />

            default:
              return null
          }
        })
      }
    </div>
  )
}
