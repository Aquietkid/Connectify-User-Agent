import React, { useState } from 'react';

function UserProfile() {
    const [isMembersView, setIsMembersView] = useState(false);

    const toggleView = () => {
        setIsMembersView(!isMembersView);
    };

    // Common groups datal
    const commonGroups = [
        {
            name: "Skull Smashers",
            members: ["Captain America", "Thanos", "Gamora"],
            more: 9,
            admin: "You"
        },
        {
            name: "Marvel & Fans",
            members: ["Captain America", "Thanos", "Gamora"],
            more: 9,
            admin: "You"
        },
        {
            name: "DC Haters",
            members: ["Captain America", "James Gun", "Tom Hidleston"],
            admin: "You"
        }
    ];

    return (
        <div className='flex-1 p-8'>
            <div className='max-w-2xl mx-auto'>
                {/* User header section with larger image */}
                <div className='flex items-center gap-6 mb-8 pt-12'>
                    <div className='w-32 h-32 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-200'>
                        <img 
                            src='https://example.com/profile-image.jpg' // Replace with your image path
                            alt='Art the Clown'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>Art the Clown</h1>
                        <p className='text-lg text-gray-600'>Happy Halloween</p>
                    </div>
                </div>

                <div className='border-t border-gray-200 my-6'></div>
                {/* Action buttons */}
                <div className='flex gap-4 mb-8'>
                    <button 
                        className='flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-100 transition text-base'
                        onClick={toggleView}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {isMembersView ? 'Remove Friend' : 'Request Friend'}
                    </button>
                    <button className='flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-full hover:bg-gray-100 transition text-base'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        Chat
                    </button>
                </div>

                {isMembersView && (
                    <div className='mb-8'>
                        <h2 className='text-xl font-semibold mb-4'>Media</h2>
                        <div className='grid grid-cols-3 gap-2'>
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className='aspect-square bg-gray-200 rounded-lg overflow-hidden'>
                                    <img 
                                        src={`https://picsum.photos/300/300?random=${item}`}
                                        alt={`Media ${item}`}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className='mb-8'>
                    <h2 className='text-xl font-semibold mb-6'>
                        {isMembersView ? 'Friends' : 'Members'}
                    </h2>
                    <div className='flex gap-6 overflow-x-auto pb-4'>
                        {/* Friend/Member 1 */}
                        <div className='flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1)] text-center'>
                            <div className='flex flex-col items-center gap-4 mb-4'>
                                <div className='w-16 h-16 rounded-full bg-gray-300 overflow-hidden shadow-md'>
                                    <img 
                                        src='https://i.pravatar.cc/150?img=1' 
                                        alt='Rick Sanchez'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <h3 className='font-medium text-lg'>Rick Sanchez</h3>
                            </div>
                            <p className='text-gray-600'>a decoy created by a decoy for emergency</p>
                        </div>

                        {/* Friend/Member 2 */}
                        <div className='flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1)]'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='w-16 h-16 rounded-full bg-gray-300 overflow-hidden shadow-md'>
                                    <img 
                                        src='https://i.pravatar.cc/150?img=5' 
                                        alt='Jack Sparrow'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <h3 className='font-medium text-lg'>Jack Sparrow</h3>
                            </div>
                            <p className='text-gray-600'>black is on auction. hurry up and get the fastest ship</p>
                        </div>

                        {/* Friend/Member 3 - Only shown in Members view */}
                        {isMembersView && (
                            <div className='flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1)]'>
                                <div className='flex items-center gap-4 mb-4'>
                                    <div className='w-16 h-16 rounded-full bg-gray-300 overflow-hidden shadow-md'>
                                        <img 
                                            src='https://i.pravatar.cc/150?img=7' 
                                            alt='Michael Corleone'
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <h3 className='font-medium text-lg'>Michael Corleone</h3>
                                </div>
                                <p className='text-gray-600'>CEO at Corleone Casino Ltd. Miami</p>
                            </div>
                        )}

                        {/* "See more" button in Members view */}
                        {isMembersView && (
                            <div className='flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1)] flex items-center justify-center'>
                                <button className='text-blue-500 font-medium'>see more</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Common Groups Section - Horizontal */}
                <div className='mt-8'>
                    <h1 className='text-2xl font-bold mb-6'>Common Groups</h1>
                    <div className='flex gap-6 overflow-x-auto pb-4'>
                        {commonGroups.map((group, index) => (
                            <div key={index} className='flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1)]'>
                                <h2 className='text-xl font-semibold mb-4'>{group.name}</h2>
                                <h3 className='font-medium text-gray-700 mb-3'>{group.admin}</h3>
                                <div className='space-y-3'>
                                    {group.members.map((member, idx) => (
                                        <div key={idx} className='flex items-center gap-3'>
                                            <div className='w-10 h-10 rounded-full bg-gray-300 overflow-hidden'>
                                                <img 
                                                    src={`https://i.pravatar.cc/150?img=${index * 3 + idx + 30}`}
                                                    alt={member}
                                                    className='w-full h-full object-cover'
                                                />
                                            </div>
                                            <span>{member}</span>
                                        </div>
                                    ))}
                                </div>
                                {group.more && (
                                    <p className='text-gray-500 mt-3'>{group.more} more</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;