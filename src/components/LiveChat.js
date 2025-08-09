import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { useEffect } from 'react';
import { addMessages } from '../utils/chatSlice';
import { generateName ,generateMessage } from '../utils/randomChatGenerator';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessaages = useSelector(store => store.chat?.messages)

    useEffect(()=>{

        const timer = setInterval(()=>{
            console.log("api polling")
            dispatch(addMessages({
                name:generateName(),
                message : generateMessage()
            }))

            
        },2000)


        return ()=>{clearInterval(timer)}
    })

    return (<div className="livechat-container">
                < div className="chatMessages-container">
                {chatMessaages && chatMessaages.map((mess)=>
                
                    <ChatMessage
                    name={mess.name}
                    message = {mess.message}/>

                )}
                </div>
               
                
            </div>)

}

export default LiveChat;