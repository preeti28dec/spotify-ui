import React from 'react'
import AboutSong from './AboutSong'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'

function RightSidebar() {
    return (
        <>
            <div className='flex rigth-bar'>
                            <div className='arrows flex '>
                                <IoIosArrowDropleft />
                                <IoIosArrowDropright />
                            </div>
                            <div className='upgrade-button'>
                                <button className="h-10 px-5 text-white transition-colors duration-150 border border-gray-700 rounded-full focus:shadow-outline hover:bg-black hover:text-indigo-100">Upgrade</button>
                                <div className="relative inline-block">
                                    <div class="relative inline-block text-left">
                                        <div>
                                            <button type="button" class="inline-flex justify-center  rounded-full border border-gray-700 pr-3  bg-gray-900 text-sm font-medium text-white    " id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                <img className="inline object-cover w-12 h-12 mr-2 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />
                                                <div className='user_profile'>
                                                    <span>Preetithakur</span>
                                                    <span>
                                                        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </button>
                                            {/* <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                                <div className="py-1" role="none">
                                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account </a>
                                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Profile</a>
                                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Upgrade to premium</a>
                                                    <form method="POST" action="#" role="none">
                                                        <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Log out</button>
                                                    </form>
                                                </div>
                                            </div> */}
                                        </div>

                                    </div>
                                </div>

                            </div>
                    <div className='About_song'><AboutSong /></div>
                </div>
                {/* <PlayList/> */}
        </>

    )
}

export default RightSidebar



