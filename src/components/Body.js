import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import Header from "./Header";

const Body = () =>{
    return (<div>
        <Header/>
        <div class="body-container">
             <SideBar/>
            <MainContainer/>
        </div>
       
    </div>)
}

export default Body;