import React from 'react'
import { AiOutlinePlayCircle, AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import useMusicPlayer from '../hooks/useMusicPlayer';

import { BsPause, BsPlay, BsHeart } from 'react-icons/bs'


function PlayList() {
    const music = useMusicPlayer();
    return (
        <div className='py-2  bg-black play-list-main-div text-white'>
            <div className="play-list">
                <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs play_button ">
                    <AiOutlinePlayCircle className=" max-w-xs hover:scale-110 transition duration-300 ease-in-out" />
                </div>
                <div className='like_button'><AiOutlineHeart /></div>
                <div className='font-medium text-7xl more_dots'>...</div>

            </div>
            <div className='scroll_list'>
                <div className="table w-full list-heading">
                    <div className="table-header-group   sticky top-16 bg-gray-800">
                        <div className="table-row ">
                            <div className="table-cell  play-list-text px-4 py-3 title-fontfont-medium ">#</div>
                            <div className="table-cell  play-list-text px-4 py-3 title-fontfont-medium ">TITLE</div>
                            <div className="table-cell  play-list-text px-4 py-3 title-fontfont-medium ">ALBUM</div>
                            <div className="table-cell  play-list-text px-4 py-3 title-fontfont-medium ">DATE ADDED</div>
                            <div className="table-cell  play-list-text px-4 py-3 title-fontfont-medium "><MdOutlineWatchLater /></div>
                        </div>
                    </div>

                    <div className="  table-row-group">
                        {music.trackList.map((track, index) =>
                            <div className='Parent_class table-row hover:bg-gray-700 ' onClick={() => music.playTrack(index)}>
                                <span className='ml-4 Numbers'>{track.Sno} </span>
                                {music.isPlaying && music.currentTrackIndex === index ? (
                                    <BsPause className='ml-4 play_icon' />
                                ) : (
                                    <BsPlay className='ml-4 play_icon' />
                                )}
                                <div className='table-cell '>
                                    <div className='songs-image flex'>
                                        <img className='mt-4' src={track.src} alt="loding..." />
                                        <div className='px-4 relative top-4'>
                                            <div className='play-list-text'>{track.title}</div>
                                            <div className='min-w-[300px]'>{track.name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-cell px-4 py-3 play-list-text ">{track.content}</div>
                                <div className="table-cell px-4 py-3 play-list-text ">{track.dateAdded}</div>
                                <div className=' flex items-center'>
                                    <div className='visible hover:invisible'>
                                        <BsHeart className='' /></div>
                                    <div className="table-cell px-4 py-3 play-list-text ">{track.time}</div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PlayList
