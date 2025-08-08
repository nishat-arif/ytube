import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoPlay from "./VideoPlay";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice"; 

const Watch = () => {
const dispatch = useDispatch();
    const [params , setParams]= useSearchParams();
    const videoId = params.get('v')



    const videoList = useSelector(store => store?.videoList?.videoListData);
    const [data ,setData] = useState(videoList);


    const videoData = videoList?.filter(video => video.id === videoId)
   


    useEffect(()=>{
        dispatch(closeMenu());

    },[])



    return (<div className="watch-container">
        <div className="watch-first">
            <VideoPlay videoData = {videoData[0]}/>
            <LiveChat/>
        </div>
        <div className="watch-second">
            <CommentsContainer/>
        </div>
    </div>)
}

export default Watch;