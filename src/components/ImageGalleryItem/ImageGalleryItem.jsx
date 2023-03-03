import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webUrl, alt }) => {
    return <img className={css.ImageGalleryItem} src={webUrl} alt={alt} />;
}

ImageGalleryItem.propTypes = {
  webUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};