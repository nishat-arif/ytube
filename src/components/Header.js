import React from "react";
import logo from '../assets/logo.png'
import menuLogo from '../assets/menuLogo.png'
import userIcon from '../assets/userIcon.png'
import searchIcon from '../assets/searchIcon.png'


const Header = () =>{
    return(<div class="header-container">

            <div  class="header-logo">
            <img src={menuLogo} className="app-logo" alt="menu-logo" />
            <img src={logo} className="app-logo" alt="app-logo" />
            </div>
            <div class="header-search">
                <input type="text" class="search-input"></input>  
                <button class="search-button"><img src={searchIcon} class="search-icon" alt="search-logo" /></button>  
            </div>
            <div class="header-user">
                <img src={userIcon} className="user-logo" alt="user-logo" />     
            </div>
       
        
    </div>)
}

export default Header;