import React from 'react';

function MyFriends({ friends, isMembersView }) {
    return (
        <div className='mb-3'>
            <h2 className='text-2xl font-bold mb-3'>
                {isMembersView ? 'Friends' : 'Members'}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {friends.map((friend, index) => (
                    <div key={index} className='flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1)] text-center'>
                        <div className='flex flex-col items-center gap-4 mb-4'>
                            <div className='w-16 h-16 rounded-full bg-gray-300 overflow-hidden shadow-md'>
                                <img
                                    src={friend.profilePicture}
                                    alt={friend.name}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h3 className='font-medium text-lg'>{friend.name}</h3>
                        </div>
                        <p className='text-gray-600'>{friend.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyFriends;
