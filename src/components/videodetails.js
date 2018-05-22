import React from 'react';

const VideoDetail = ({video})=>{
	if(!video){
		return <div>Loading...</div>
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`
    return (
        <div><iframe src={url}></iframe></div>
    )
}

export default VideoDetail;