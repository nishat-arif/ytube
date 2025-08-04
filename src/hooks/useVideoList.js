import { useEffect } from 'react';
import {videoListUrl} from '../utils/constants'
import { useDispatch } from 'react-redux';
import { getVideoListData } from '../utils/videoListSlice'; 
import { videoListRes } from '../utils/videoListRes';
import { useSelector } from "react-redux";


const useVideoList = () =>{

    const dispatch = useDispatch();
    const videoListData = useSelector(store => store?.videoList?.videoListData)


    const getVideoList = async()=>{

        const data = await fetch(videoListUrl);
        //const json_data = videoListRes;
        const json_data = await data.json();
        dispatch(getVideoListData(json_data.items))
        
    }

    useEffect(() => {
        !videoListData && getVideoList();
    }, []);
}

export default useVideoList;