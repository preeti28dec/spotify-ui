import React from 'react'
import { BsSpotify, BsSearch } from 'react-icons/bs';
import { CgHome, CgAddR } from 'react-icons/cg';
import { VscLibrary } from 'react-icons/vsc'
import { BiHeartSquare } from 'react-icons/bi'

function LeftSidebar() {
    const data = ["jdskfk","sgfkwgakw","sehgvefkvs","sdjgkgsk","shgfkgfk","jdskfk","sgfkwgakw","sehgvefkvs","sdjgkgsk"]
    return (
        <div className='grid '>
            <header className="text-gray-400  body-font">
                <div className="p-6">
                    <a href='#' className="flex  font-medium items-center text-white  mb-4 text-2xl ">
                        <BsSpotify className='app-logo-icon' />
                        <span className="ml-3 text-2xl">Spotify</span>
                    </a>
                </div>
            </header>

            <div className="p-4 px-5 text-white">
                <a href='#' className="flex title-font font-medium items-center text-white  mb-4 ">
                    <CgHome className='left-sidbar-icon' />
                    <span className=" flex title-font font-medium items-center text-white ml-3">
                        Home
                    </span>
                </a>
                <a href='#' className="flex title-font font-medium items-center text-white  mb-4 ">
                    <BsSearch className='left-sidbar-icon' />
                    <span className=" flex title-font font-medium items-center text-white ml-3 ">
                        Search
                    </span>
                </a>
                <a href='#' className="flex title-font font-medium items-center text-white  mb-4 ">
                    <VscLibrary className='left-sidbar-icon' />
                    <span className=" flex title-font font-medium items-center text-white ml-3">
                        Your Library
                    </span>
                </a>
            </div>
            <div className='p-5  text-white'>
                <a href='#' className="flex title-font font-medium items-center text-white  mb-4">
                    <CgAddR className='left-sidbar-add-icon' />
                    <span className=" flex title-font font-medium items-center text-white ml-3">Create Playlist</span>
                </a>
                <a href='#' className="flex title-font font-medium items-center text-white  mb-4">
                    <BiHeartSquare className='left-sidbar-like-icon' />
                    <span className=" flex title-font font-medium items-center text-white ml-3">Liked Songs</span>
                </a>
            </div>
            <hr className='hr-line' />
            <div className='text-gray-400 font-bold px-4 py-4'>My PlayList #1</div>
            <div className='overflow-auto touch-auto'>
            <div className='play-list-leftside px-4 py-4'>{data.map((item)=>
                <div className='text-white py-2'>{item}</div>
                )}
            </div>
            </div>
            <div className='text-white px-4 py-4 '>Install App</div>
        </div>
    )
}

export default LeftSidebar
