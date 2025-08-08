import userIcon from '../assets/userIcon.png'

const Comment = ({data}) => {

    const {name , text , replies} = data;

    return (<div className="comment-container">
                    <div className="comment-img">
                            <img src={userIcon} className="user-icon" alt="user-logo" />     
                    </div>
                    <div className="comment">
                        <p className="comment-name">{name}</p>
                        <p className="comment-text">{text}</p>
                    </div>

    </div>)

}

export const CommentList = ({commentdata}) =>{
    return  (
        <>

            {commentdata.map((comment, idx) => (
                    <div>
                        <Comment key={idx} data={comment} />
                        <div className="nested-comments"><CommentList commentdata={comment.replies}/></div>
                    </div>        
                ))}
        
        </>
        
        )
        
}

export default Comment