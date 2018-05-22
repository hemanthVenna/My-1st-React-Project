import React from 'react';
//props = {video}
const Item = ({video, onVideoSelect}) => {
	// const video = props.video;
	// const onVideoSelect = props.onVideoSelect;
	const imageUrl = video.snippet.thumbnails.default.url;
	const header = video.snippet.description; 
    return (
        <li onClick={() => onVideoSelect(video)}>
        <div>
        <img src={imageUrl}/>
        <p>{header}</p>
        </div>
        </li>
    )
}

export default Item