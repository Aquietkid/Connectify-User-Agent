import React, { useEffect, useState } from 'react';
import Media from '../Media';
import Friends from './Friends';
import CommonGroups from './CommonGroups';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../api/user';
import { createPersonalChat } from '../../api/chat';
import { BsChatDots } from 'react-icons/bs';
import { openChat } from '../../app/mainWindowSlice';

function Profile() {
    const [data, setData] = useState(null)
    const { userId } = useSelector(state => state.mainWindow)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState({
        data: false,
        chatCreate: false
    });

    async function createNewChat() {
        setLoading(prev => ({ ...prev, chatCreate: true }))
        const res = await createPersonalChat({
            userId
        });
        if (res) {
            const chat = { _id: res.data._id, name: data.user.name, avatar: data.user.profilePicture, type: "personal" }
            dispatch(openChat(chat))
        }

        setLoading(prev => ({ ...prev, chatCreate: false }))
    }

    useEffect(() => {
        (async () => {
            setLoading(prev => ({ ...prev, data: true }))
            const res = await getUserInfo(userId);
            console.log(res.data);
            setData(res.data)
            setLoading(prev => ({ ...prev, data: false }))
        })()
    }, [userId])

    if (loading.data || !data) return null;

    return (
        <div className="w-full max-w-6xl mx-auto overflow-x-hidden mt-2 pl-12 pr-4">

            <div className='max-w-full mx-auto'>
                {/* User header section with larger image */}
                <div className='flex items-center gap-8 mb-4 pt-4 relative'>
                    <div className='w-40 h-40 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-200'>
                        <img
                            src='https://example.com/profile-image.jpg'
                            alt='Art the Clown'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div>
                        <h1 className='text-5xl font'>{data.user.name}</h1>
                        <p className='text-xl text-gray-600'>{data.user.about}</p>
                    </div>

                    {/* Added the joined date */}
                    <p className='absolute bottom-0 right-0 text-sm text-gray-500 mb-2 mr-4'>Joined at {new Date(data.user.createdAt).toDateString()}</p>
                </div>


                <div className='border-t border-gray-200 my-6'></div>

                {/* Action buttons */}
                <div className='flex gap-4 mb-4'>
                    <button
                        className='flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-100 transition text-base'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {data.isFriend ? 'Remove Friend' : 'Request Friend'}
                    </button>
                    <button
                        onClick={createNewChat}
                        disabled={loading.chatCreate}
                        className='flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-100 transition text-base disabled:bg-placeholder disabled:animate-pulse'>
                        <BsChatDots size={20} />
                        Chat
                    </button>
                </div>

                {data.isFriend && <Media mediaMessages={data.mediaMessages} />}

                <Friends isMembersView={data.isFriend} />

                <CommonGroups commonGroups={data.commonGroups} />
            </div>
        </div>
    );
}

export default Profile;