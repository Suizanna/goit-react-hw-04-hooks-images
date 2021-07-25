import s from "./SearchBar.module.css";

const Searchbar = ({ onSetQuery, query, onSubmit }) => {
  return (
    <header className={s.Searchbar}>
      <form onSubmit={onSubmit} className={s.SearchForm}>
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
