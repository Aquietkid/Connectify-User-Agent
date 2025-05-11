import React, { useState } from 'react';

function Media() {
    const [expanded, setExpanded] = useState(false);
    //const toggleImages = () => setExpanded(prev => !prev);
    const allImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const visibleImages = expanded ? allImages : allImages.slice(0, 5);

    const toggleImages = () => setExpanded(prev => !prev);

    return (
        <div>
            <h1 className='text-2xl font-bold mb-2'>Media</h1>
            <div className='grid grid-cols-5 gap-x-0.5 gap-y-3 pb-3'>
                {visibleImages.map((item) => (
                    <div key={item} className='w-45 h-40 bg-gray-200 rounded-lg overflow-hidden'>
                        <img
                            src={`https://picsum.photos/300/300?random=${item}`}
                            alt={`Media ${item}`}
                            className='w-full h-full object-cover'
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={toggleImages}
                className='ml-auto block px-4 py-1 border border-black text-black rounded-full text-sm hover:bg-black hover:text-white transition'
            >
                {expanded ? 'See Less' : 'See More'}
            </button>


        </div>
    );
}

export default Media;
