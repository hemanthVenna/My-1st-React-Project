import React,{Component} from 'react';
import Item from './videolistitem.js'

// class VideoList extends Component {
// 	// constructor(props){
// 	// 	super(props)

// 	// }
// 	render(){
// 		return (
// 			<ul>
// 			    // {this.props.videos.length}
// 			</ul>
// 		)
// 	}
// }

const VideoList = (props) => {
	const listItem = props.videos.map((video) => {
		return <Item onVideoSelect = {props.onVideoSelect} key={video.etag} video={video}/>
	})
	return (
		<ul>
		{props.videos.length}
		{listItem}
		</ul>
	)
}

export default VideoList