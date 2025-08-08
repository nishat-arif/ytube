import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../src/utils/appSlice"
import videoListReducer from '../src/utils/videoListSlice'
import searchSlice from '../src/utils/searchSlice'

const appStore = configureStore({
    reducer: {
        app: appReducer,
        videoList : videoListReducer,
        search : searchSlice,
    }
})

export default appStore