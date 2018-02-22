import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleInputChange = (e) => {
      const searchTerm = e.target.value;
      this.setState({
        search: searchTerm,
      });
      console.log(searchTerm);
    };

  handleSubmit = (e) => {
    e.preventDefault();
    let searchText = this.refs.searchText;
    this.props.artistSearch(this.state.search);
    searchText.value = '';
  };

  render () {
    return (
      <div>
      <form>
        <div className="form-group row">
          <label htmlFor="inputArtist" className="col-sm-2 col-form-label">iTunes Library</label>
          <div className="col-sm-8">
            <input ref='searchText' onChange={this.handleInputChange} type="text" className="form-control" id="artistName" placeholder="Search for an Artist"/>
          </div>
       </div>
       <button onClick={this.handleSubmit} className="btn btn-info mb-2">Search</button>
      </form>
    </div>
      );
  }
};

export default Search;
