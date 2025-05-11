import React, { useState } from 'react';

function Friends({ isMembersView }) {
    const [expanded, setExpanded] = useState(false);
    const toggleImages = () => setExpanded(prev => !prev);
    return (
        <div className='mb-3'>
            <h2 className='text-2xl font-bold mb-3'>
                {isMembersView ? 'Friends' : 'Members'}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
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
                <div className='flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1)] text-center'>
                    <div className='flex flex-col items-center gap-4 mb-4'>
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

                 {isMembersView && (
                    <div className='flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1)] text-center'>
                        <div className='flex flex-col items-center gap-4 mb-4'>
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
               


                
            </div>
            {isMembersView && (
                    
                    <button 
                        onClick={toggleImages}
                        className='ml-auto block px-4 py-1 mt-3 border border-black text-black rounded-full text-sm hover:bg-black hover:text-white transition'
                    >
                        {expanded ? 'See Less' : 'See More'}
                    </button>
                )}
        </div>
    );
}

export default Friends;