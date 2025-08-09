import React, { useEffect, useRef, useState } from "react";
import logo from '../assets/logo.png'
import menuLogo from '../assets/menuLogo.png'
import userIcon from '../assets/userIcon.png'
import searchIcon from '../assets/searchIcon.png'
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu} from "../utils/appSlice"; // Adjust the path as needed
import {searchApi , CORS_PROXY} from "../utils/constants"
import {cacheResults , setLRUCache} from "../utils/searchSlice"


const Header = () =>{

    const dispatch = useDispatch();

    const [searchQuery , setSearchQuery] = useState("");
    const [searchSuggestions , setSearchSuggestions] = useState([])
    const [showSearchSuggestion , setShowSearchSuggestion] = useState(false)

    const searchCache = useSelector((store) => store.search);

    useEffect(()=>{
        const getSearchSuggestions = setTimeout(()=>{
            
            if (searchCache.data[searchQuery]) {
                setSearchSuggestions(searchCache.data[searchQuery]);
            } else {
                getSearchResult();
            }},500)

        return ()=> clearTimeout(getSearchSuggestions)  //clear the timer on unmounting 
    },[searchQuery])

    const getSearchResult = async () =>{

            const data = await fetch(CORS_PROXY + searchApi  + searchQuery);
            const json_data = await data.json();

            setSearchSuggestions(json_data[1])
            
            // update cache
            // dispatch(
            // cacheResults({
            //     [searchQuery]: json_data[1],
            // })

            dispatch(
            setLRUCache({
                [searchQuery]: json_data[1],
            })

   
            );
            
    }


    const  handleMenuToggle = ()=>{
        dispatch(toggleSideMenu())
    }
    return(<div className="header-container">

            <div  className="header-logo">
            <img src={menuLogo} className="menu-logo" alt="menu-logo"  onClick={handleMenuToggle}/>
            <img src={logo} className="app-logo" alt="app-logo" />
            </div>

            <div className="header-search">
                <div className="search-box">
                        <input type="text" className="search-input" value={searchQuery} onChange={(e) =>setSearchQuery(e.target.value) } 
                        onFocus={()=>setShowSearchSuggestion(true)}
                        onBlur={()=>setShowSearchSuggestion(false)}/>  
                    <button className="search-button"><img src={searchIcon} className="search-icon" alt="search-logo" /></button> 
                </div>

                    
                {(showSearchSuggestion && (searchSuggestions.length !== 0) ) && 
                <>
                    <div className="search-suggestions">
                        <ul className="search-list">
                            {searchSuggestions.map((suggestion) => 
                                <li className="search-item" key={suggestion}>
                                    <img src={searchIcon} className="search-icon" alt="search-logo" style={{'marginRight':'5px'}}/>
                                    {suggestion}
                                </li> )}
                        </ul>
                    </div> 
                </>}
                  
            </div>
            
            <div className="header-user">
                <img src={userIcon} className="user-logo" alt="user-logo" />     
            </div>
       
        
    </div>)
}

export default Header;