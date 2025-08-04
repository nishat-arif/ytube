import React from "react";
import VideoCard from "./VideoCard";

import useVideoList from '../hooks/useVideoList'
import { useSelector } from "react-redux";


const VideoContainer = () =>{

    useVideoList();

   const videoListData = useSelector(store => store?.videoList?.videoListData)
   console.log('videoListData' , videoListData) 


   


    return(<div className="video-container">

        {videoListData && videoListData.map((video)=>
            <VideoCard  key= {video.id} videoData = {video}/>
        )}
    </div>)
}

export default VideoContainer;