import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import useVideoList from '../hooks/useVideoList'
import { useSelector } from "react-redux";

const MainContainer = () =>{

   useVideoList();

   const videoListData = useSelector(store => store?.videoList?.videoListData)
   
   console.log(videoListData)
    return(<div className="main-container">
        <ButtonList/>
        <VideoContainer videoListData = {videoListData[0]}/>
    </div>)
}

export default MainContainer;