import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../src/utils/appSlice"
import videoListReducer from '../src/utils/videoListSlice'

const appStore = configureStore({
    reducer: {
        app: appReducer,
        videoList : videoListReducer
    }
})

export default appStore