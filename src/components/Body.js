import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import Header from "./Header";
import { useSelector } from "react-redux";

const Body = () =>{

    const isSideMenuOpen = useSelector(Store => Store.app.isSideMenuOpen)
    return (<div>
        <Header/>
        <div className="body-container">
            {isSideMenuOpen && <SideBar/>}
            <MainContainer/>
        </div>
       
    </div>)
}

export default Body;