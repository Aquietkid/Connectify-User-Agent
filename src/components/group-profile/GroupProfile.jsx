import React, { useEffect, useState } from 'react';
import Media from '../Media';
import { useDispatch, useSelector } from 'react-redux';
import { createPersonalChat } from '../../api/chat';
import { BsChatDots, BsPencil, BsCheck } from 'react-icons/bs';
import { openChat } from '../../app/mainWindowSlice';
import { AiOutlineUserAdd } from "react-icons/ai";
import { openPersonalInfo } from '../../app/mainWindowSlice'
import SelectUserModal from '../SelectUserModal';

function GroupProfile() {
    const [data, setData] = useState({
        user: {
            profilePicture: null,
            name: 'WE Project',
            about: 'Web Engineering Term Project comms',
            createdAt: '05-11-2025',
        },
        isFriend: true,
        members: [
            { profilePicture: '/src/assets/alex.png', name: 'Alex', role: 'Admin' },
            { profilePicture: '/src/assets/alex.png', name: 'Alex', role: 'Member' },
            { profilePicture: '/src/assets/alex.png', name: 'Alex', role: 'Member' },
        ]
    });

    const { userId } = useSelector(state => state.mainWindow);
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState({ data: false, chatCreate: false });
    const [edit, setEdit] = useState({ name: false, about: false, picture: false });

    async function createNewChat() {
        setLoading(prev => ({ ...prev, chatCreate: true }));
        const res = await createPersonalChat({ userId });
        if (res) {
            dispatch(openChat({
                _id: res.data._id,
                name: data.user.name,
                avatar: data.user.profilePicture
            }));
        }
        setLoading(prev => ({ ...prev, chatCreate: false }));
    }

    function handleFieldChange(field, value) {
        setData(prev => ({ ...prev, user: { ...prev.user, [field]: value } }));
    }

    return (
        <div className="w-full max-w-6xl mx-auto mt-4 px-6">
            <div className="flex items-center gap-6 mb-4 relative">
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-gray-300">
                    {edit.picture ? (
                        <input
                            type="text"
                            value={data.user.profilePicture || ''}
                            onChange={e => handleFieldChange('profilePicture', e.target.value)}
                            onBlur={() => setEdit(e => ({ ...e, picture: false }))}
                            className="w-full h-full text-sm text-center p-2"
                        />
                    ) : (
                        <>
                            <img
                                src={data.user.profilePicture}
                                alt={data.user.name}
                                className="w-full h-full object-cover"
                            />
                            <BsPencil
                                size={16}
                                onClick={() => setEdit(e => ({ ...e, picture: true }))}
                                className="absolute bottom-1 right-1 text-gray-600 bg-white rounded-full p-0.5 cursor-pointer"
                            />
                        </>
                    )}
                </div>

                <div>
                    <div className="flex items-center gap-2 text-4xl font-semibold">
                        {edit.name ? (
                            <input
                                type="text"
                                value={data.user.name}
                                onChange={e => handleFieldChange('name', e.target.value)}
                                onBlur={() => setEdit(e => ({ ...e, name: false }))}
                                className="text-4xl font-semibold border-b border-gray-400 focus:outline-none"
                                autoFocus
                            />
                        ) : (
                            <>
                                {data.user.name}
                                <BsPencil
                                    size={18}
                                    onClick={() => setEdit(e => ({ ...e, name: true }))}
                                    className="cursor-pointer text-gray-500"
                                />
                            </>
                        )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-lg">
                        {edit.about ? (
                            <input
                                type="text"
                                value={data.user.about}
                                onChange={e => handleFieldChange('about', e.target.value)}
                                onBlur={() => setEdit(e => ({ ...e, about: false }))}
                                className="text-lg border-b border-gray-300 focus:outline-none"
                                autoFocus
                            />
                        ) : (
                            <>
                                {data.user.about}
                                <BsPencil
                                    size={14}
                                    onClick={() => setEdit(e => ({ ...e, about: true }))}
                                    className="cursor-pointer text-gray-400"
                                />
                            </>
                        )}
                    </div>
                </div>

                <p className="absolute bottom-0 right-0 text-sm text-gray-500">
                    created at {new Date(data.user.createdAt).toDateString()}
                </p>
            </div>

            <div className="flex gap-4 mb-6">
                <button className="flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-100 transition text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    {data.isFriend ? 'Remove Friend' : 'Request Friend'}
                </button>
                <button
                    onClick={createNewChat}
                    disabled={loading.chatCreate}
                    className="flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-100 transition text-base disabled:bg-placeholder disabled:animate-pulse"
                >
                    <BsChatDots size={20} />
                    Chat
                </button>
            </div>

            {data.isFriend && <Media mediaMessages={data.mediaMessages} />}

            <div className="my-6 border-t border-gray-200"></div>

            <div className="mb-6">
                <div className='flex flex-row'>
                    <h2 className="text-2xl font-semibold mb-2">Members</h2>
                    <div className='ml-auto mr-0 hover:cursor-pointer' onClick={() => setModal(true)} >
                        <AiOutlineUserAdd />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {(data.members || []).slice(0, 3).map((member, i) => (
                        <div key={i} className="border rounded-xl p-4 text-center">
                            <img
                                src={member.profilePicture}
                                alt={member.name}
                                className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                            />
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
                {data.members?.length > 3 && (
                    <p className="mt-2 text-right text-blue-500 cursor-pointer">see more</p>
                )}
            </div>
            {modal && <SelectUserModal
                mode="group"
                onClose={() => setModal(false)}
                onNext={(_id) => {
                    dispatch(openPersonalInfo(_id))
                    setModal(false)
                }}
            />}
        </div>
    );
}

export default GroupProfile;
