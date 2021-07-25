import s from "./Button.module.css";

const Button = ({ onLoadMore }) => {
  return (
    <button
      className={s.Button}
      onClick={onLoadMore}
      type="button">
      Load more
    </button>
  );
};

export default Button;
