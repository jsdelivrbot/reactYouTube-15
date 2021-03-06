import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/searchbar';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyCopgIro-8mQu9eEMz6lAxRDWaRfgQEomU';



class App extends Component  {
    constructor(props){
        
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'baseball'}, (videos) => {
            this.setState({ videos });
        });
    }
    render(){
    return (
    <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
    </div>
    );
  };

}
ReactDOM.render(<App />, document.querySelector('.container'));