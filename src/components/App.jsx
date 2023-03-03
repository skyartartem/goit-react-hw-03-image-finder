import { Component } from 'react';
import{ Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    search: 'start',
    page: 1,
  };

  handleSubmit = search => {
    // console.log(search);
    this.setState({search});
  };

  render() {
    
    return (
      <div>
        <Toaster
          toastOptions={{
            duration: 1500,
          }}
        />
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery search={this.state.search} />
        {/* <Modal/> */}
      </div>
    );
  }
};
