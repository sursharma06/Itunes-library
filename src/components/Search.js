import React from 'react';

const Search = ({ artistSearch }) => {

  const handleInputChange = (e) => {
      console.log(e.target.value);
      const searchTerm = e.target.value;
      artistSearch(searchTerm);
    };

  return (
      <div className="form-group">
    <label htmlFor="search" className="col-sm-2 control-label"></label>
    <div className="col-sm-8" onChange = {handleInputChange}>
      <input type="text" className="form-control" id="artist" placeholder="Search for an artist" />
    </div>
    <button type="button" className="btn btn-info">Search</button>
    </div>
    );
};

export default Search;
