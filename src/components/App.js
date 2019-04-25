import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList.js';


export default class App extends React.Component {
  state = {images: []};


  onSearchSubmit = (term) => {
    unsplash.get('search/photos', {
      params: {query: term}
    }).then((response) => {
      this.setState({images: response.data.results});
      console.log(this.state.images)
    });
  }

  
  
  
  render() {
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

