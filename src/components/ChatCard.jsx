import React, { useState } from 'react'

function ChatCard() {

    const [typing, setTyping] = useState(false);
    const [lastMessage, setLastMessage] = useState('It\'s not worth it');
    const [pinned, setPinned] = useState(true);
    const [msgCount, setMsgCount] = useState(1);
    const [ticks, setTicks] = useState(0);
    const [messageType, setMessageType] = useState(''); // '' -> text; 'v' -> video; 'p' -> photo; 'a' -> audio

    let messageIconSource = 'src\\assets\\';

    if (messageType == 'v') {
        messageIconSource += 'video.svg';
    } else if (messageType == 'p') {
        messageIconSource += 'photo.svg';
    } else if (messageType == 'a') {
        messageIconSource += 'audio.svg';
    } else {
        messageIconSource = null;
    }

    return (
        <div className='flex flex-row items-start justify-start w-[100%] mt-5 ml-5 mr-5 h-12.5'>

            {/** The image */}
            <img src="src\assets\alex.png" alt="profile picture" className='w-[15%]' />

            {/** The center section */}
            <div className='flex flex-col ml-2.5 w-[60%]'>
                <p className='font-bold text-xl text-ellipsis text-nowrap'>Captain America</p>
                {
                    typing ? <p className='text-[#4A9D4C]'>typing...</p> : <div className='flex flex-row'>
                        {ticks > 0 ? <img src={'src\\assets\\tick-' + (ticks == 1 ? 'single.svg' : 'double.svg')} alt='' className='w-3 mr-1'></img> : <></>}
                        <img src={messageIconSource} alt="" className='mr-1' />
                        <p className='text-xs text-[#B3B3B3]'>{lastMessage}</p>
                    </div>
                }
            </div>

            {/** The icon section to the right */}
            <div className='flex flex-col mr-0 ml-auto items-end justify-between h-full'>
                <div className='flex flex-row items-center justify-end'>
                    {
                        pinned ? <img src="src\assets\chat-pin.svg" alt="" className='w-2.5 h-2.5 justify-self-end mr-1.25' /> : <div></div>
                    }
                    <p className=' text-[10px] text-nowrap justify-self-end'>09:50 PM</p>
                </div>
                {
                    (msgCount > 0) ? <p className='flex bg-black rounded-full text-[10px] text-white w-5 h-5 items-center justify-center self-end'>{msgCount > 9 ? '9+' : msgCount}</p> : <p></p>
                }
            </div>
        </div>
    )
}

export default ChatCard