import React, { useContext, useEffect, useState } from 'react'
import TopBar from './TopBar'
import MessageSender from './MessageSender'
import Messages from './Messages';
import { ChatAreaContext } from '../../context/ChatAreaContext';
import MediaPreviewBeforeSend from './MediaPreviewBeforeSend';
import { useSelector } from 'react-redux';
import SkeletonMessage from '../skeleton/SkeletonMessage'

function ChatArea() {
    const { chat } = useSelector(state => state.mainWindow)
    const { preview, fetchAllMessages, messages } = useContext(ChatAreaContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async () => {
            await fetchAllMessages()
            setTimeout(() => setLoading(false), 1000)
        }
    }, [])

    return (
        <div className="h-full w-full flex flex-col p-2">
            <TopBar />
            <div className="flex-1 overflow-y-auto p-5 border border-[#eaeaea] border-t-0 w-full">
                {loading ? (
                    <>
                        <SkeletonMessage />
                        <SkeletonMessage />
                        <SkeletonMessage />
                        <SkeletonMessage />
                        <SkeletonMessage />
                        <SkeletonMessage />
                        <SkeletonMessage />
                        <SkeletonMessage />
                        <SkeletonMessage />
                        <SkeletonMessage />
                        <SkeletonMessage />
                    </>
                ) : !preview ? (
                    messages.length > 0 ? (
                        <Messages />
                    ) : (
                        <p className="text-sm text-gray-400 text-center">No messages found</p>
                    )
                ) : (
                    <MediaPreviewBeforeSend />
                )}
            </div>
            <MessageSender />
        </div>
    )
}

export default ChatArea
