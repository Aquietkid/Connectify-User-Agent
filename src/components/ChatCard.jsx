import React, { useEffect, useState } from 'react'
import { PLACEHOLDER_AVATAR } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { openChat } from '../app/mainWindowSlice';
import { zuluDateSToStandard } from '../utils/formatter';
import { VscMic } from 'react-icons/vsc';
import { SlPicture } from 'react-icons/sl';
import { PiVideoCameraLight } from "react-icons/pi";
import StatusTick from './StatusTick';

function ChatCard(props) {
    const {
        avatar,
        createdAt,
        name,
        members,
        lastMessage,
        type,
        unseenMessagesCount,
        _id
    } = props
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    function getMessageStatus() {
        if (lastMessage) {
            const receipt = lastMessage.receipt
            if (receipt && user._id == lastMessage.sender) {
                return receipt.every(item => item.status === 'seen') ? 'seen' :
                    receipt.every(item => item.status === 'received') ? 'received' : 'sent';
            }
        }
    }

    const tick = getMessageStatus() || '';

    return (
        <div className='flex cursor-pointer items-start justify-start w-full p-5 hover:bg-gray-50' onClick={() => {
            dispatch(openChat(props))
        }}>

            {/** The image */}
            <img src={avatar || PLACEHOLDER_AVATAR} alt="profile picture" className='w-[50px] rounded-full' />

            {/** The center section */}
            <div className='flex flex-col ml-2.5 w-[60%]'>
                <p className='font-semibold text-xl text-ellipsis text-nowrap'>{name}</p>
                {lastMessage &&
                    <div className='flex items-center'>
                        <StatusTick status={tick} />
                        {lastMessage.type == 'text' ?
                            <p className='text-xs text-[#B3B3B3]'>{lastMessage.text}</p> :
                            lastMessage.type == 'audio' ?
                                <div>
                                    <VscMic size={15} color='#bebebe' />
                                </div> :
                                lastMessage.type == 'video' ?
                                    <div>
                                        <PiVideoCameraLight size={15} color='#bebebe' />
                                    </div> :
                                    lastMessage.type == 'image' ?
                                        <div>
                                            <SlPicture size={15} color='#bebebe' />
                                        </div> :
                                        <></>
                        }
                    </div>
                }
            </div>

            {/** The icon section to the right */}
            <div className='flex flex-col mr-0 ml-auto items-end justify-between h-full'>
                <div className='flex flex-row items-center justify-end'>
                    {
                        false ? <img src="src\assets\chat-pin.svg" alt="" className='w-2.5 h-2.5 justify-self-end mr-1.25' /> : <div></div>
                    }
                    {lastMessage && <p className=' text-[10px] text-nowrap justify-self-end'>{zuluDateSToStandard(lastMessage.createdAt)}</p>}
                </div>
                {
                    (unseenMessagesCount > 0) ? <p className='flex bg-black rounded-full text-[10px] text-white w-5 h-5 items-center justify-center self-end'>{unseenMessagesCount > 9 ? '9+' : unseenMessagesCount}</p> : null
                }
            </div>
        </div >
    )
}

export default ChatCard