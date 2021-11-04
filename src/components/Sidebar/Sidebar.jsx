import React from 'react'
import {Home, ThumbUp, VideoLibrary, WatchLater, Whatshot} from '@material-ui/icons'
import './sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__buttons">
                <div className="sidebar__btn sidebar__btn--active">

                    <Home className="sidebar__icon"/>
                    <p>Home</p>
                </div>

                <div className="sidebar__btn">

                    <Whatshot className="sidebar__icon"/>
                    <p>Trending</p>
                </div>

                <div className="sidebar__btn">
                       <WatchLater className="sidebar__icon"/>
                        <p>WatchLater</p>
                   </div>

                   <div className="sidebar__btn">
                       <VideoLibrary className="sidebar__icon"/>
                        <p>Libraries</p>
                   </div>
                   <div className="sidebar__btn">
                       <ThumbUp className="sidebar__icon"/>
                        <p>Liked Videos</p>
                   </div>

                </div> 
        </div>
    )
}

export default Sidebar
