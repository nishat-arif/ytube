import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

import useVideoList from '../hooks/useVideoList'
import { useSelector } from "react-redux";


const VideoContainer = () =>{

    useVideoList();

   const videoListData = useSelector(store => store?.videoList?.videoListData)

    return(<div className="video-container">

        {videoListData && videoListData.map((video)=>
            <Link to={"/watch?v=" + video.id} className="videocard-link"><VideoCard  key= {video.id} videoData = {video}/></Link>
        )}
    </div>)
}

export default VideoContainer;