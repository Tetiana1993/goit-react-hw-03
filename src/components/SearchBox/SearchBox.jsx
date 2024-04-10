import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ inputValue, onChange }) => {
  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
