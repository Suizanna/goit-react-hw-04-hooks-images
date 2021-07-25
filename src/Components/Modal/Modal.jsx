import s from "./Modal.module.css";

const Modal = ({ modalImg, closeModal }) => {
  return (
    <div onClick={closeModal} className={s.Overlay}>
      <div className={s.Modal}>
        <img src={modalImg} alt="" />
      </div>
    </div>
    
  );
};

export default Modal;

