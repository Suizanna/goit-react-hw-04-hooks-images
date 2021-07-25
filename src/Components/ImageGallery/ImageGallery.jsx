import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, showModal }) => {
  return (
    <ul  className={s.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}      
          modalUrl={largeImageURL} 
          url={webformatURL}
          showModal={showModal}
          alt={tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
