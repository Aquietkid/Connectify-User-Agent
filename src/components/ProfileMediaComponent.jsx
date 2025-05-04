import React from 'react';

function ProfileMediaComponent() {
    return (
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
    );
}

export default ProfileMediaComponent;