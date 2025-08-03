import React from "react";
import logo from '../assets/logo.png'
import menuLogo from '../assets/menuLogo.png'
import userIcon from '../assets/userIcon.png'
import searchIcon from '../assets/searchIcon.png'
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "../utils/appSlice"; // Adjust the path as needed


const Header = () =>{

    const dispatch = useDispatch();


    const  handleMenuToggle = ()=>{
        dispatch(toggleSideMenu())
    }
    return(<div className="header-container">

            <div  className="header-logo">
            <img src={menuLogo} className="menu-logo" alt="menu-logo"  onClick={handleMenuToggle}/>
            <img src={logo} className="app-logo" alt="app-logo" />
            </div>
            <div className="header-search">
                <input type="text" className="search-input"></input>  
                <button className="search-button"><img src={searchIcon} className="search-icon" alt="search-logo" /></button>  
            </div>
            <div className="header-user">
                <img src={userIcon} className="user-logo" alt="user-logo" />     
            </div>
       
        
    </div>)
}

export default Header;