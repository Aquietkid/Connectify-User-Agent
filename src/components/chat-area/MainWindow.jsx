import React, { useContext } from 'react'
import TopBar from './TopBar'
import MessageSender from './MessageSender'
import TextMessage from './TextMessage'
import VoiceMessage from './VoiceMessage'
import VideoMessage from './VideoMessage'
import { ChatAreaContext } from '../../context/ChatAreaContext'
import CrossButton from '../CrossButton'

function MainWindow() {
    const { preview, closePreview } = useContext(ChatAreaContext)

    return (
        <div className="h-full w-full flex flex-col">
            <TopBar contactName="Captain America" isTyping={true} />
            <div className="flex-1 overflow-y-auto p-5 border border-[#eaeaea] border-t-0">
                {!preview ? (
                    <div className='space-y-2'>
                        <TextMessage />
                        <VoiceMessage />
                        <VideoMessage />
                    </div>
                ) : (
                    <div className='h-full'>
                        <div className='flex justify-end'>
                            <CrossButton onClick={closePreview} />
                        </div>
                        {preview.type === "image" ? (
                            <img
                                src={URL.createObjectURL(preview.blob)}
                                alt="preview"
                                className='h-4/5 rounded-md mx-auto'
                            />
                        ) : (
                            <video
                                src={URL.createObjectURL(preview.blob)}
                                className='h-4/5 rounded-md mx-auto'
                                controls
                            />
                        )}
                    </div>
                )}
            </div>
            <MessageSender />
        </div>
    )
}

export default MainWindow