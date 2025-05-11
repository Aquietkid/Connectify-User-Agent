import React, { useContext, useEffect } from 'react'
import TopBar from './TopBar'
import MessageSender from './MessageSender'
import Messages from './Messages';
import { ChatAreaContext } from '../../context/ChatAreaContext';
import MediaPreviewBeforeSend from './MediaPreviewBeforeSend';

function ChatArea() {
    const { preview, fetchAllMessages } = useContext(ChatAreaContext)

    useEffect(() => {
        fetchAllMessages();
    }, [])

    return (
        <div className="h-full w-full flex flex-col p-2">
            <TopBar />

            <div className="flex-1 overflow-y-auto p-5 border border-[#eaeaea] border-t-0 w-full">
                {!preview ?
                    <Messages /> :
                    <MediaPreviewBeforeSend />
                }
            </div>
            <MessageSender />
        </div>
    );
}

export default ChatArea