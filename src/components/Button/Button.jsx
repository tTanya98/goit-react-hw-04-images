import sty from './Button.module.css';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ label, handleLoadMore }) => (
  <button type="button" className={sty.ButtonLoadMore} onClick={handleLoadMore}>
    {label}
  </button>
);

ButtonLoadMore.propTypes = {
  label: PropTypes.string,
  handleLoadMore: PropTypes.func,
};

export default ButtonLoadMore;