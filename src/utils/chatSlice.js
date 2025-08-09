import { createSlice } from "@reduxjs/toolkit";
import {liveChatCount} from '../utils/constants'

const chatSlice = createSlice({
    name : "chat",
    initialState :{
        messages:[]
    },
    reducers:{
        addMessages : (state, action)=>{
            if(state.messages.length === liveChatCount){
                state.messages.shift()
            }
            
            state.messages.push(action.payload)

        }

    }
})

export const {addMessages} = chatSlice.actions;

export default chatSlice.reducer;