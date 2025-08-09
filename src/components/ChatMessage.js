import userIcon from '../assets/userIcon.png'

const ChatMessage = ({name , message}) =>{
    return (
        <div className="chatMessage-container">
            <div className="comment-img">
                            <img src={userIcon} className="user-icon" alt="user-logo" />     
                    </div>
                    <div className="chat">
                        <p className="chat-name">{name}</p>
                        <p className="chat-text">{message}</p>
                    </div>
        </div>
    )
}


export default ChatMessage;