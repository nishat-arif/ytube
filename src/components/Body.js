import React from "react";

import SideBar from "./SideBar";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";


const Body = () =>{

    const isSideMenuOpen = useSelector(Store => Store.app.isSideMenuOpen)

    
    return (
    <div>

       
        <div className="body-container">
            {isSideMenuOpen && <SideBar/>}
            <Outlet/>
        </div>
       
    </div>)
}

export default Body;