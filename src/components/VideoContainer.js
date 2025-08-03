import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoContainer = ({videoListData}) =>{

    return(<div className="video-container">
       <Link to='/watch'><VideoCard videoListData={videoListData}/></Link>
    </div>)
}

export default VideoContainer;