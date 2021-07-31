import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, showModal }) => {
  console.log(images);
  return (
    <ul  className={s.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}      
          modalUrl={largeImageURL} 
          // src={webformatURL}
          url={webformatURL}
          alt={tags}
          showModal={showModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
