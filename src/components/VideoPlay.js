const VideoPlay = ({videoData}) => {

    const {id , snippet} = videoData

    return (<div className="videoPlay-container">
                <iframe width="750" 
                
                height="400" 
                src= {"https://www.youtube.com/embed/" + id + "?si=" + snippet?.channelId +"&autoplay=1"}
                title="video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    </div>)

}

export default VideoPlay;