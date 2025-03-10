import styles from "./SearchBox.module.css";

const SearchBox = ({ inputValue, inputHandleChange }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="searchContact">Find contacts by name</label>
      <input
        type="text"
        id="searchContact"
        value={inputValue}
        onChange={inputHandleChange}
      />
    </div>
  );
};

export default SearchBox;
