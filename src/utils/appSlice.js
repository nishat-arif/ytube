import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSideMenuOpen : false,
    },
    reducers: {
        toggleSideMenu : (state,action)=>{
            state.isSideMenuOpen = !(state.isSideMenuOpen)
        },

        closeMenu : (state,action)=>{
            state.isSideMenuOpen = false;

        }
        
    }

});
export const {toggleSideMenu , closeMenu} = appSlice.actions;
export default appSlice.reducer;