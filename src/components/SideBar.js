import React from "react";

const SideBar = () =>{

    
    return(<div className="sidebar-container">

        <div>
             <ul>
                <li>Home</li>
                <li>Settings</li>
                <li>Latest News</li>
                <li>Trending</li>
                
                <li>Misclleanous</li>

            </ul>
        </div>
        
        <div>
            <h4>Subscriptions</h4>
            <ul>
                <li>Akshay Saini</li>
                <li>BharatzKitchen</li>
                <li>CodeBasics</li>
                <li>NamasteyDev</li>
                <li>Bosscoder</li>

            </ul>

        </div>
        <div>
            <h4>Playlist</h4>
            <ul>
                <li>javascript</li>
                <li>React</li>
                <li>Angular</li>
                <li>Python</li>
                <li>AI</li>

            </ul>

        </div>
        <div>
            <h4>Exlplore</h4>
            <ul>
                <li>Places</li>
                <li>Foods</li>
                <li>Lifestyle</li>
                <li>Fashion</li>
                <li>Fitness</li>

            </ul>

        </div>
        
    </div>)
}

export default SideBar;