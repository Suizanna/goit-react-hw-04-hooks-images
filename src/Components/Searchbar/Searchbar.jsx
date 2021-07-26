import s from "./SearchBar.module.css";
// import { useState } from "react";
const Searchbar = ({ onSetQuery, query, onSubmit }) => {
    //  const [value, setValue] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   //нет рендера картинок при пробеле если trim
  //   if (value.trim() === '') { 
  //   return alert("Enter search query");
  //   }

  //  onSubmit(value);
  //   //очиста формы сразу после Submit 
  //   setValue("");
  // };
 

  return (
    <header className={s.Searchbar}>
      <form onSubmit={onSubmit}
        // onSubmit={handleSubmit}
        className={s.SearchForm}>
      <button type="submit" className={s.SearchForm_button}>
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onInput={onSetQuery}
          className={s.SearchForm_input} 
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
