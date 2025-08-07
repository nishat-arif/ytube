const VideoCard = ({videoData}) => {

    const {snippet , statistics} =  videoData;
    return (<div className="video-card">

            <img src= {snippet?.thumbnails?.medium?.url} alt="thumbnail" className="thumbnail"></img>
            <p className="title-text">{snippet?.channelTitle}</p>
            <span>{statistics?.viewCount} views</span>

    </div>)

}

export const MostViewedVideoCard = ({videoData})=>{

    return (<div className="viewed-videocard"> 
        <VideoCard videoData = {videoData}/>
        <img src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png" alt="likeIcon" className="like-icon"></img>
    </div>)
}

export default VideoCard;

