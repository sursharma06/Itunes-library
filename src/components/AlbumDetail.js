import React from 'react';

const AlbumDetail = (props) => {

  const albums = props.albums;
  const result = albums.results;
  //console.log('this is album details', result);
  const album = result.map((item, index) => {
    return (
      <div key={index} className="card" style={style}>
        <img style={{ height: '200px', width: '200px', margin: '0 auto', marginTop: '5px', border: '1px solid black', borderRadius: '4px' }} className="card-img-top" src={item.artworkUrl60} alt="profileImage" />
        <div className="card-body">
          <h4 className="card-text">{item.artistName}</h4>
          <h6 className="card-title">Album: {item.collectionName}</h6>
            <small>Price: ${item.collectionPrice}</small><br/>
            <small>Genre: {item.primaryGenreName}</small><br/>
          <a href={item.collectionViewUrl} className="btn btn-info" target="_blank">Listen to tracks</a>
        </div>
    </div>
  );
  });
  return (
    <div className="jumbotron" style={{ margin: '0 auto', height: 'auto', width: '800px' }}>
      <span>{album}</span>
    </div>
  );
};

export default AlbumDetail;

const style = {
  maxWidth: '400px',
  margin: '0 auto',
  WebkitBoxShadow: '0 2px 2px 0 rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.3)',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.3)',
  marginBottom: '5px',
};
