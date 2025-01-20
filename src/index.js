import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_key = "your-API-KEY-here";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: [], selectedVideo: null};

        this.videoSearch('video killed the radio star song');
    }

    videoSearch(term) {
        YTSearch({key: API_key, term: term}, (videosData) => {
            this.setState({videos: videosData, selectedVideo: videosData[0]});
        });
    }

    render() {
        //Throttle the search by 300ms
        const throttledVideoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={throttledVideoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                // Callback, call this when the user selects video
                    onVideoSelect = {(selectedVideo) => {
                        this.setState({selectedVideo: selectedVideo})
                    }}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));