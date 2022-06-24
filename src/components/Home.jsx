import React from 'react'
import Footer from './Footer'
import LeftSidebar from './left-sidebar'

import PlayList from './PlayList';
import RightSidebar from './right-sidebar';


function Home() {
    return (
        <>

            <div className='flex grow overflow-auto'>
                <div className="left-container bg-black "><LeftSidebar /></div>
                <div className="right-container bg-gradient-to-b from-red-600  w-full overflow-auto touch-auto h-full"><RightSidebar />
                    <PlayList />
                </div>
            </div>
            <div className=''><Footer /></div>




        </>
    )
}

export default Home
