import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      albums: [],
    };
    this.artistSearch('adele');
  }

  artistSearch = (ARTIST_NAME) => {
    fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            albums: result,
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
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
