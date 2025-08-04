const VideoCard = ({videoData}) => {

    const {snippet , statistics} =  videoData;
    return (<div className="video-card">

            <img src= {snippet?.thumbnails?.medium?.url} alt="thumbnail" className="thumbnail"></img>
            <p className="title-text">{snippet?.channelTitle}</p>
            <span>{statistics?.viewCount} views</span>

    </div>)

}

export default VideoCard;

