import React from 'react'
import Footer from './Footer'
import LeftSidebar from './left-sidebar'

import PlayList from './PlayList';
import RightSidebar from './right-sidebar';


function Home() {
    return (
        <>

            <div className='flex grow overflow-auto'>
                <div className="left-container bg-[#0f0f0f] "><LeftSidebar /></div>
                <div className="right-container  bg-[#485868] w-full overflow-auto touch-auto h-full"><RightSidebar/>
                    <PlayList />
                </div>
            </div>
            <div className=''><Footer /></div>




        </>
    )
}

export default Home
