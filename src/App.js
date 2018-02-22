import React, { Component } from 'react';
import Search from './components/Search';
import AlbumDetail from './components/AlbumDetail';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      albums: [],
      searchValue: false,

    };
  }

  artistSearch = (ARTIST_NAME) => {
    fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&entity=album&limit=10`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('this is working', result);
          this.setState({
            isLoaded: true,
            albums: result,
            searchValue: !this.state.searchValue,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  render() {
    const searchValue = this.state.searchValue;
    const albums = this.state.albums;
    return (
      <div className="App">
        <Search artistSearch = {this.artistSearch}/>
        { (searchValue) ? <AlbumDetail albums={albums}/> : null }
      </div>
    );
  }
}

export default App;
