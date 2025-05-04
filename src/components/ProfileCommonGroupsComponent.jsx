import React from 'react';

function ProfileCommonGroupsComponent({ commonGroups }) {
    return (
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
    );
}

export default ProfileCommonGroupsComponent;