import React from 'react'
import { AiOutlinePlayCircle, AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'


function PlayList(props) {
    // const table_head = [{ id:1, name: "# TITLE" }, { id:2, name: "ALBUM" }, { id:3 ,name: "DATE ADDED" }, {id:4 , name: "TIME ICON" }]
    const table_data = [
        { id: 1, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'world0', name: "singer Name", dateAdded: "2 hour ago", content: 'Welcome to learning React!', time: "4:02" },
        { id: 2, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World1', name: "singer Name", dateAdded: "2 hour ago", content: 'You React from npm.', time: "4:02" },
        { id: 3, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World2', name: "singer Name", dateAdded: "2 hour ago", content: 'You can install npm.', time: "4:02" },
        { id: 4, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World3', name: "singer Name", dateAdded: "2 hour ago", content: 'You can install React from.', time: "4:02" },
        { id: 5, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World4', name: "singer Name", dateAdded: "2 hour ago", content: ' install React from npm.', time: "4:02" },
        { id: 6, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World5', name: "singer Name", dateAdded: "2 hour ago", content: ' React from npm.', time: "4:02" },
        { id: 7, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World16', name: "singer Name", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
        { id: 4, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World3', name: "singer Name", dateAdded: "2 hour ago", content: 'You can install React from.', time: "4:02" },
        { id: 5, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World4', name: "singer Name", dateAdded: "2 hour ago", content: ' install React from npm.', time: "4:02" },
        { id: 6, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World5', name: "singer Name", dateAdded: "2 hour ago", content: ' React from npm.', time: "4:02" },
        { id: 7, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World16', name: "singer Name", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
        { id: 8, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World16', name: "singer Name", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
        { id: 9, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World16', name: "singer Name", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
        { id: 10, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World16', name: "singer Name", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
        { id: 11, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World16', name: "singer Name", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },
        { id: 12, src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg", title: 'World16', name: "singer Name", dateAdded: "2 hour ago", content: 'You can install .', time: "4:02" },




    ];
    return (
        <div className='p-4 bg-gradient-to-b from-gray-500 to-gray-800 play-list-main-div'>
            <div className="play-list ">
                <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs play_button ">
                    <AiOutlinePlayCircle className=" max-w-xs hover:scale-110 transition duration-300 ease-in-out" />
                </div>
                <div className='like_button'><AiOutlineHeart /></div>
                <div className='font-medium text-7xl more_dots'>...</div>

            </div>
            <div className='scroll_list'>
                <div className="table w-full list-heading">
                    <div className="table-header-group   sticky top-16 bg-slate-600">
                        <div className="table-row ">
                            <div className="table-cell  play-list-text px-4 py-3 title-fontfont-medium ">#</div>
                            <div className="table-cell  play-list-text px-4 py-3 title-fontfont-medium ">TITLE</div>
                            <div className="table-cell  play-list-text px-4 py-3 title-fontfont-medium ">ALBUM</div>
                            <div className="table-cell  play-list-text px-4 py-3 title-fontfont-medium ">DATE ADDED</div>
                            <div className="table-cell  play-list-text px-4 py-3 title-fontfont-medium "><MdOutlineWatchLater /></div>
                        </div>
                    </div>
                   
                    <div className="table-row-group">
                        {table_data.map((post) =>
                            <div className='table-row'>
                                <div className="table-cell px-4 py-3 play-list-text">{post.id}</div>
                                <div className='table-cell '>
                                    <div className='songs-image flex'>
                                        <img className='mt-4' src={post.src} alt="loding..." />
                                        <div className='px-4'>
                                            <div className='play-list-text'>{post.title}</div>
                                            <div className='min-w-[300px]'>{post.name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-cell px-4 py-3 play-list-text ">{post.content}</div>
                                <div className="table-cell px-4 py-3 play-list-text ">{post.dateAdded}</div>
                                <div className="table-cell px-4 py-3 play-list-text ">{post.time}</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* {table_head.map((head) => */}
                {/* <tr className=''>
                        <th className="px-4 py-3 title-fontfont-medium text-black"># </th>
                        <th className="px-4 py-3 title-fontfont-medium text-black">TITLE</th>
                        <th className="px-4 py-3 title-fontfont-medium text-black">ALBUM</th>
                        <th className="px-4 py-3 title-fontfont-medium text-black">DATE ADDED</th>
                        <th className="px-3 py-3 title-fontfont-medium text-black"><MdOutlineWatchLater /></th>
                    </tr> */}
                {/* )} */}
                {/* </thead> */}

            </div>


        </div>
    )
}

export default PlayList
