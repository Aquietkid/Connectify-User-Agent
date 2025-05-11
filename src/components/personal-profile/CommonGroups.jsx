import React, { useState } from 'react';

function CommonGroups({ commonGroups }) {

    return (
        <div className='mt-8'>
            <h1 className='text-2xl font-bold mb-3'>Common Groups</h1>
            <div className='flex gap-6 overflow-x-auto pb-4'>
                {commonGroups.length == 0 ?
                    <p>No common group</p> :
                    commonGroups.map((group, index) => (
                        <div key={index} className='flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.1)] relative'>
                            <div className='flex items-center gap-4'>
                                <div className='w-16 h-16 rounded-full bg-gray-300 overflow-hidden shadow-md'>
                                    <img
                                        src='https://i.pravatar.cc/150?img=1'
                                        alt='Rick Sanchez'
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <h2 className='text-xl font-semibold mb-4 text-center'>{group.name}</h2>
                            </div>

                            <h3 className='font-medium text-gray-500 mb-3 pt-5 '>{group.admin}</h3>
                            <div className='space-y-3'>
                                {group.members.map((member, idx) => (
                                    <div key={idx} className='flex items-center gap-3'>
                                        <span className='text-gray-500'>{member}</span>
                                    </div>
                                ))}
                            </div>

                            {group.more && (
                                <p className='absolute bottom-4 right-4 text-gray-500 underline'>{group.more} more</p>
                            )}
                        </div>
                    ))}
            </div>


            {/* <button 
                        onClick={toggleImages}
                        className='ml-auto block px-4 py-1 mt-3 border border-black text-black rounded-full text-sm hover:bg-black hover:text-white transition'
                    >
                        {expanded ? 'See Less' : 'See More'}
                    </button> */}
        </div>
    );
}

export default CommonGroups;
