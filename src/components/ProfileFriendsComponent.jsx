import React from 'react';

function ProfileFriendsComponent({ isMembersView }) {
    return (
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
    );
}

export default ProfileFriendsComponent;