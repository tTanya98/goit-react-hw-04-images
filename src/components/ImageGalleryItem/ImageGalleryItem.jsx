import sty from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => (
  <li className={sty.imageGalleryItem}>
    <img
      src={webformatURL}
      alt=""
      className={sty.imageGalleryItemImage}
      onClick={() => onImageClick(largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
