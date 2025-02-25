import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;
    if (!video) {
        return <div>Loading...</div>
    }

    console.log(video);
    
    const videoID = video.id.videoId;
    console.log(videoID);
    const url = `https://www.youtube.com/embed/${videoID}`;
    console.log(url);

    return (
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url}></iframe>
            </div>
            <div className='details'>
                <div className='video-detail-title'>{video.snippet.title}</div>
                <div className='video-detail-description'>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;