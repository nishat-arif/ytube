import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSideMenuOpen : false,
    },
    reducers: {
        toggleSideMenu : (state,action)=>{
            state.isSideMenuOpen = !(state.isSideMenuOpen)
        }
        
    }

});
export const {toggleSideMenu} = appSlice.actions;
export default appSlice.reducer;