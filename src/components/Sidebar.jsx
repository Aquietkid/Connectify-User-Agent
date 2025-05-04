import React, { useState } from 'react'
import ContactList from './ContactList'
import UserCard from './UserCard'

function Sidebar() {

    const tabs = ["All", "Personal", "Group"]
    const [currentTab, setCurrentTab] = useState(tabs[0])

    return (
        <div className='flex flex-col w-96'>
            <UserCard />
            <div className='flex flex-row gap-6 mt-4 ml-6'>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setCurrentTab(tab)}
                        className={`text-base font-medium ${currentTab === tab ? 'border-b-2 border-black' : 'hover:cursor-pointer'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <ContactList />
        </div>
    )
}

export default Sidebar