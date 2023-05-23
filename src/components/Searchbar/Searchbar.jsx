import sty from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit, onChange, inputValue }) => (
  <header className={sty.searchBar}>
    <form className={sty.searchForm} onSubmit={onSubmit}>

      <button type="submit" className={sty.searchFormButton}>
            Search
          </button>
      <input
        className={sty.searchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onChange}
        value={inputValue}
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Searchbar;