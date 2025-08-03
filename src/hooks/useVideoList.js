import { useEffect } from 'react';
import {videoListUrl} from '../utils/constants'
import { useDispatch } from 'react-redux';
import { getVideoListData } from '../utils/videoListSlice'; 


const useVideoList = () =>{

    const dispatch = useDispatch();


    const getVideoList = async()=>{

        const data = await fetch(videoListUrl);
        const json_data = await data.json();
        console.log ('jsondata' ,json_data.items )
        dispatch(getVideoListData(json_data.items))
        
    }

    useEffect(() => {
        //getVideoList();
    }, []);
}

export default useVideoList;