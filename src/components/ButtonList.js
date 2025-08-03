import React, { useState } from "react";
import {btnTextList} from '../utils/constants'


const ButtonList = () =>{

    const [btnList , setBtnList] = useState(btnTextList)

    return(<div className="buttonlist-container"> 

    {btnList.map(btn=>
        <button className="btnList">{btn}</button>
    )}

        
    </div>)
}

export default ButtonList;