import React from 'react'

import { BsSpotify } from 'react-icons/bs';
function AboutSong() {
    return (
        <div className="text-gray-600 ">
            <div className="flex  items-center">
                <div className="relative overflow-hidden">
                    <img className="object-cover h-64" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Loding.." />
                    <div className="absolute top-0 left-0 px-6 py-4">
                        <a className="font-medium items-center text-white  mb-4 text-2xl">
                            <BsSpotify />
                        </a>
                        <span className='text-white text-bold song-title '>Song Title</span>
                    </div>
                </div>
                <div className=" flex flex-col md:items-start text-center ml-5">
                    <p className='font-bold text-white '>PLAYLIST</p>
                    <h1 className="title-font sm:text-8xl  mb-4 font-medium text-white">Song Title</h1>
                    <p className="font-medium text-gray-300">hsdjfd uasgdigd uacgksjcfs audgiku</p>
                    <div className='font-bold text-white'>
                        <span><a>spotify.</a></span><span> 5327 likes.</span><span> 50 songs,</span><span> 5 hr 30 min</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutSong
