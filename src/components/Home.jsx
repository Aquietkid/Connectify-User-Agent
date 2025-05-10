import React from 'react'

import MainWindow from './MainWindow'
import NavSidebar from './NavSidebar'
import Sidebar from './Sidebar'
import ProfileComponent from './ProfileComponent'

function Home() {
    return (
        <>
            <div className='flex flex-row'>
                <NavSidebar />
                <div className="flex h-screen">
                    <div className="w-96 overflow-x-auto">
                        <Sidebar />
                    </div>
                    <div className="flex-1 overflow-x-auto">
                        <MainWindow />
                        {/* <ProfileComponent isFriend={true} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home