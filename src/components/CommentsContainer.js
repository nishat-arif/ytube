import Comment , {CommentList}from './Comment';

const CommentsContainer = () => {
    
    // n level deep comment
    const CommentData = [
        { name :"user1",
          text:"this is comment text",
          replies:[]
        },
         { name :"user2",
          text:"this is comment text",
          replies:[
                    { name :"user3",
                    text:"this is comment text",
                    replies:[
                         { name :"user2",
                        text:"this is comment text",
                        replies:[]
                        },
                         { name :"user1",
                        text:"this is comment text",
                        replies:[
                             { name :"user3",
                            text:"this is comment text",
                            replies:[]
                            }
                        ]
                        }
                    ]
                    }
                    ]
        },
         { name :"user3",
          text:"this is comment text",
          replies:[
            { name :"user2",
                        text:"this is comment text",
                        replies:[]
                        }
          ]
        },
         { name :"user1",
          text:"this is comment text",
          replies:[]
        }, 
        { name :"user5",
          text:"this is comment text",
          replies:[]
        }
    ]

    return (<div className="comments-container">
        <h4 className='comments-heading'>Comments</h4>
        <div><CommentList commentdata ={CommentData}/></div>
    </div>)

}

export default CommentsContainer;