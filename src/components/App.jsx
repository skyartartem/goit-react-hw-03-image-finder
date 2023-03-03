import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    search: 'start',
    page: 1,
  };

  handleSubmit = search => {
    console.log(search);
    this.setState({search});
  };

  render() {
    return (
      <div>
        <Searchbar handleSubmit={this.handleSubmit} />
        {/* <h1>{this.state.search}</h1> */}
        <ImageGallery search={this.state.search} />
      </div>
    );
  }
};
