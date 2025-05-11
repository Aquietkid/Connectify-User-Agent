import { generateVideoThumbnail } from 'generate-video-dumbnail';
import React, { useEffect, useState } from 'react';
import { PiVideoCameraLight } from 'react-icons/pi';
import { SlPicture } from 'react-icons/sl';

function Media({ mediaMessages }) {
    const [expanded, setExpanded] = useState(false);
    const [thumbnails, setThumbnails] = useState({});

    const toggleImages = () => setExpanded(prev => !prev);

    useEffect(() => {
        async function loadThumbnails() {
            const newThumbnails = {};
            const videoMessages = mediaMessages.filter(item => item.type === 'video');

            await Promise.all(videoMessages.map(async (item) => {
                try {
                    const thumb = await generateVideoThumbnail(item.link, 4, {
                        format: 'image/jpeg',
                        quality: 0.88,
                    });
                    newThumbnails[item._id] = thumb;
                } catch (err) {
                    console.error('Thumbnail generation failed for', item._id, err);
                }
            }));

            setThumbnails(newThumbnails);
        }

        loadThumbnails();
    }, [mediaMessages]);

    const displayedMedia = expanded ? mediaMessages : mediaMessages.slice(0, 5);

    return (
        <div>
            <h1 className='text-2xl font-bold mb-2'>Media</h1>
            <div className='grid grid-cols-5 gap-x-0.5 gap-y-3 pb-3'>
                {displayedMedia.length == 0 ?
                    <p>No media shared</p>
                    : displayedMedia.map((item) => {
                        const src = item.type === 'video'
                            ? thumbnails[item._id]
                            : item.link;

                        return (
                            <div key={item._id} className='w-45 h-40 bg-gray-200 rounded-lg overflow-hidden relative text-white'>
                                <img
                                    src={src}
                                    alt={item._id}
                                    className='w-full h-full object-cover'
                                />
                                <div className='bg-black/20 w-full h-full absolute top-0 left-0 flex items-end justify-start p-2'>
                                    {item.type == 'video' ? <PiVideoCameraLight /> : <SlPicture />}
                                </div>
                            </div>
                        );
                    })}
            </div>
            {mediaMessages.length > 5 && (
                <button
                    onClick={toggleImages}
                    className='ml-auto block px-4 py-1 border border-black text-black rounded-full text-sm hover:bg-black hover:text-white transition'
                >
                    {expanded ? 'See Less' : 'See More'}
                </button>
            )}
        </div>
    );
}

export default Media;
