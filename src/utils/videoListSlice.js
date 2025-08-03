import { createSlice } from '@reduxjs/toolkit';

const videoListSlice = createSlice({
    name : 'videoList',
    initialState : {
        videoListData : null,
    },

    reducers: {
        getVideoListData : (state , action ) =>{

            state.videoListData = action.payload

        }
    }

})


export const {getVideoListData} =videoListSlice.actions
export default videoListSlice.reducer;