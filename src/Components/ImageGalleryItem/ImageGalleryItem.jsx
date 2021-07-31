import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ alt, url, modalUrl, showModal }) {

  return (
    <li  className={s.ImageGalleryItem} 
    >
      <img className={s.ImageGalleryItem_image}
      onClick={() => showModal(modalUrl)}
        // src={src}
        src={url}
        alt={alt}   
      />  
    </li>
  );
}

export default ImageGalleryItem;
