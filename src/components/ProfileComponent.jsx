// ProfileComponent.jsx
import React, { useState } from 'react';
import ProfileMediaComponent from './ProfileMediaComponent';
import ProfileFriendsComponent from './ProfileFriendsComponent';
import ProfileCommonGroupsComponent from './ProfileCommonGroupsComponent'; // Make sure this path is correct

function ProfileComponent({ isFriend }) {
    const [isMembersView, setIsMembersView] = useState(isFriend);

    const toggleView = () => {
        setIsMembersView(!isMembersView);
    };

    // Common groups data
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
                            src='https://example.com/profile-image.jpg'
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

                {isMembersView && <ProfileMediaComponent />}
                
                <ProfileFriendsComponent isMembersView={isMembersView} />

                <ProfileCommonGroupsComponent commonGroups={commonGroups} />
            </div>
        </div>
    );
}

export default ProfileComponent;