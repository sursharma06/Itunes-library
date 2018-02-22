import React from 'react';

const Search = ({ artistSearch }) => {

  const handleInputChange = (e) => {
      console.log(e.target.value);
      const searchTerm = e.target.value;
      artistSearch(searchTerm);
    };

  return (
    <div>
    <form>
    <div className="form-group row">
    <label htmlFor="inputArtist" className="col-sm-2 col-form-label">iTunes Library</label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="artistName" placeholder="Search for an Artist"/>
    </div>
  </div>
  <button type="submit" className="btn btn-info mb-2">Search</button>
</form>
    </div>
    );
};

export default Search;
