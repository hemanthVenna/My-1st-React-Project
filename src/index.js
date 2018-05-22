import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/searchbar';
import VideoList from './components/videolist.js';
import VideoDetail from './components/videodetails.js'

const API_KEY = "AIzaSyBp9MZyX89ZverdCOtdXzVl5KhuJr2Iq3I";


class App extends Component {
	constructor(props){
        super(props);

        this.state = {videos:[],selectedvideo:null};
        this.videoSearch("surf boards")
        

	}

	videoSearch(term){
		YTSearch({key : API_KEY, term : term},(videos) =>{
			console.log(videos);
			// this.setState({videos : videos})
			this.setState({videos})
			this.setState({selectedVideo : videos[0]})
		})
	}
	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term)},3000)
		return (
			<div>
		        <SearchBar onSearchTermChange = {videoSearch} /> 
                <VideoDetail video={this.state.selectedVideo}/>
		        <VideoList onVideoSelect = {selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
