import s from "./Modal.module.css";
  

const Modal = ({ modalImg, closeModal }) => {

  return (
    <div className={s.Overlay}  onClick={closeModal} > 
      <div className={s.Modal}>
        <img src={modalImg} alt="" />
      </div>
    </div>
    
  );
};

export default Modal;

