import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const inputValue = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const inputHandleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
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
