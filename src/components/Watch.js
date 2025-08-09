import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoPlay from "./VideoPlay";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice"; 
import { addMessages } from '../utils/chatSlice';

const Watch = () => {
    const dispatch = useDispatch();
    const [params , setParams]= useSearchParams();
    const videoId = params.get('v')



    const videoList = useSelector(store => store?.videoList?.videoListData);
    const [liveChat ,setLiveChat] = useState('');


    const videoData = videoList?.filter(video => video.id === videoId)
   


    useEffect(()=>{
        dispatch(closeMenu());

    },[])

    const handleChatSubmit =(e)=>{
        e.preventDefault();
        dispatch(addMessages({
                        name:"Nishat",
                        message : liveChat
                    }))
    }



    return (<div className="watch-container">
        <div className="watch-first">
            <VideoPlay videoData = {videoData[0]}/>
            <div>
                <LiveChat/>
                <form className="chat-box"
                onSubmit={handleChatSubmit}>
                        <input className="input-chat" value={liveChat} onChange={(e)=>setLiveChat(e.target.value)}/>
                        <button className="button-chat">Send</button>
                </form>
            </div>
            
        </div>
        <div className="watch-second">
            <CommentsContainer/>
        </div>
    </div>)
}

export default Watch;