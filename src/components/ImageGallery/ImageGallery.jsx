import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getSearch } from 'api/getSearch';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
    state = {
        images: [],
        page: 1,
        pages:1
        
    }

    componentDidUpdate(prevProps, PrevState) {
        if (prevProps.search !== this.props.search) {
            getSearch(this.props.search).then(resp => resp.json()).then(data => {
                console.log("response:>>",data);
            this.setState({
              images: data.hits,
              page: data.total,
              pages: data.total / data.hits.length,
            });});
        }
    }

    render() {
        return (
          <ul className={css.gallery}>
            {this.state.images.map(item => (
              <li key={item.id} className={css.galleryItem}>
                <ImageGalleryItem webUrl={item.webformatURL} alt={item.tags} />
              </li>
            ))}
          </ul>
        );}
  
};
