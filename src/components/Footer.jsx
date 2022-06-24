import React from 'react'
import { CgPlayPauseO, CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import { FaRandom } from 'react-icons/fa'
import { AiOutlineRetweet } from 'react-icons/ai'
function Footer() {
    return (
        <>
            <div className='footer_container bg-gray-900'>
                <div className='flex justify-center'>
                    <div className=' footer-icon-size '>
                        <FaRandom className='' />
                    </div>
                    <div className='flex '>
                        <CgPlayTrackPrev />
                        <CgPlayPauseO className="max-w-xs hover:scale-110 transition duration-300 ease-in-out"/>
                        <CgPlayTrackNext />
                    </div>
                    <div className='footer-icon-size'>
                        <AiOutlineRetweet />
                    </div>
                </div>
                <div className='play-range'>
                    <label for="customRange1" className="form-label text-sm px-3 text-white ">0.00</label>
                    <input
                        type="range"
                        className="form-range  p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                        id="customRange1"
                    />
                    <label for="customRange1" className="form-label text-sm px-3 text-white">0.00</label>
                </div>
            </div>
            <div>
            </div>


        </>
    )
}

export default Footer
