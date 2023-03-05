import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images }) => {
    
    return (
      <>
        {images.map(item => (
          <li key={item.id} className={css.galleryItem}>
            <img
              loading="lazy"
              className={css.ImageGalleryItem}
              src={item.webformatURL}
              alt={item.tags}
            />
          </li>
        ))}
      </>
    );
   
    
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};