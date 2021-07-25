import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ url, alt, modalUrl, showModal }) {
  return (
    <li  className={s.ImageGalleryItem}
    >
      <img
        onClick={() => showModal(modalUrl)}
        src={url}
        alt={alt}
        className={s.ImageGalleryItem_image}
      />  
    </li>
  );
}

export default ImageGalleryItem;
