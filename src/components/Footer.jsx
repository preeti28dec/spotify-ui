import React, { useEffect, useRef, useState } from 'react'
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import { FaRandom } from 'react-icons/fa'
import { BsPause, BsPlay } from 'react-icons/bs'
import { AiOutlineRetweet } from 'react-icons/ai'
import { TbMicrophone2 } from 'react-icons/tb'
import { ImDatabase } from 'react-icons/im'
import { GiSpeaker } from 'react-icons/gi'
import { MdPhonelink } from 'react-icons/md'
import useMusicPlayer from '../hooks/useMusicPlayer'

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60); // 175/60 =2.9 ,2
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`; // 3 < 10 = 2
    const seconds = Math.floor(secs % 60); // 175 % 60 = 55
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`; //55 < 10 = 55
    return `${returnedMinutes}:${returnedSeconds}`; // 2:55
};
function Footer() {

    const audioRef = useRef();
    const music = useMusicPlayer();
    const [duration, setDuration] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {

        if (audioRef.current) {

            audioRef.current?.play();
        }
    }, [music.currentTrackId])

    useEffect(() => {
        if (audioRef.current) {
            if (music.isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [music.isPlaying])
    return (
        <>
            <div className='footer_container bg-slate-900 text-white flex justify-between'>
                <div className='footer-songs-details'>
              {music.currentTrackImg ?<><img className="footer-songs-img" src={music.currentTrackImg} alt='Loding...' /></>:<div className='text-2xl my-auto'>play songs</div>}
                    <div className=''>
                        <div className='footer-songs-name px-4'>{music.currentTrackName}</div>
                        <div className='footer-songs-name px-4'>{music.currentTrackTitle}</div>
                    </div>
                </div>
                <div className='flex play-icons pt-2'>

                    <audio src={music.currentTrackId} ref={audioRef}
                        onLoadedMetadata={(e) => {
                            setDuration(e.target.duration);
                        }}
                        onTimeUpdate={(e) => {
                            setValue(e.target?.currentTime);
                        }} />

                    <div className=' footer-icon-size '>
                        <FaRandom className='' />
                    </div>
                    <div className='flex ml-2'>
                        <CgPlayTrackPrev onClick={music.playPreviousTrack} />
                        <span className="max-w-xs hover:scale-110 transition duration-300 ease-in-out" onClick={music.togglePlay}>
                            {music.isPlaying ? <BsPause /> : <BsPlay />}
                        </span>
                        <CgPlayTrackNext onClick={music.playNextTrack} />
                    </div>
                    <div className='footer-icon-size'>
                        <AiOutlineRetweet />
                    </div>
                </div>
                <div className='play-range'>
                    <label for="customRange1" id='label-play-time' className="form-label text-sm px-3 text-white ">
                        {calculateTime(duration)}

                    </label>
                    <input
                        type="range"
                        value={value} max={duration}
                        className="form-range  p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                        id="customRange1"
                    />
                    <label for="customRange1" id='label-play-time' className="form-label text-sm px-3 text-white">
                        {duration && !isNaN(duration) && calculateTime(duration)}
                    </label>
                </div>
                <div className='flex pt-2 items-center'>
                    <div className='mx-2 my-2 '><TbMicrophone2 className='footer-icons' /></div>
                    <div className='mx-2 my-2 '><ImDatabase className='footer-icons' /></div>
                    <div className='mx-2 my-2 '><MdPhonelink className='footer-icons' /></div>
                    <div className='mx-2 my-2 '><GiSpeaker className='footer-icons' /></div>
                    <div className='mx-2 my-2 '>
                        <input
                            type="range"
                            className="form-range mx-2 my-2  bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                            id="customRange2"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
