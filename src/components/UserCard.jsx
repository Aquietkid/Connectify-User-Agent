import React from 'react'
import searchGlass from "/src/assets/search-glass.svg"

function UserCard() {
    return (
        <>
            <div className='flex flex-col items-start justify-start'>
                <div className='flex flex-row items-start justify-start mt-10.25 ml-5.75'>
                    <img src="src\assets\alex.png" alt="profile picture" className='h-12.5 w-12.5' />
                    <div className='flex flex-col ml-2.5'>
                        <h2 className='font-bold text-xl text-ellipsis'>Alexander Flamming Mat.</h2>
                        <p className='text-sm text-{#b3b3b3}'>alex@ceo.com</p>
                    </div>
                    <img src={searchGlass} alt='search glass icon' className='ml-2.5 mt-3'></img>
                </div>
                <hr className='m-auto w-[90%] mt-5 h-0.25 border-t border-[#eaeaea]' />
            </div>

        </>
    )
}

export default UserCard