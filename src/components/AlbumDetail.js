import React from 'react';

const AlbumDetail = (props) => {

  const albums = props.albums;
  const result = albums.results;
  console.log('this is album details', result);
  return (
    <div className="row">
    <div className="jumbotron" style={{ margin: '0 auto', height: '800px', width: '800px' }}>
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <img className="card-img-top" src="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text"></p>
        <a href="#" className="btn btn-info">Go somewhere</a>
      </div>
      </div>
    </div>
    </div>
  );
};

export default AlbumDetail;
