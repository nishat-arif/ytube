import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../src/utils/appSlice"
import videoListReducer from '../src/utils/videoListSlice'
import searchSlice from '../src/utils/searchSlice'
import chatSlice from '../src/utils/chatSlice';

const appStore = configureStore({
    reducer: {
        app: appReducer,
        videoList : videoListReducer,
        search : searchSlice,
        chat : chatSlice,
    }
})

export default appStore