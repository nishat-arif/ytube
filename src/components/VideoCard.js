const VideoCard = (videoListData) => {

    const { id , snippet , statistics} =  videoListData;
    return (<div className="video-container" id={id}>
        <img src= {snippet?.thumbnails?.medium?.url} alt="thumbnail" className="thumbnail"></img>
        <p className="title-text">{snippet?.title}</p>
        <span>{statistics?.viewCount} views</span>
    </div>)

}

export default VideoCard;

