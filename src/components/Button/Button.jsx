import sty from './Button.module.css';
import PropTypes from 'prop-types';

// const ButtonLoadMore = ({ label, handleLoadMore }) => (
//   <button type="button" className={sty.ButtonLoadMore} onClick={handleLoadMore}>
//     {label}
//   </button>
// );

// ButtonLoadMore.propTypes = {
//   label: PropTypes.string,
//   handleLoadMore: PropTypes.func,
// };

// export default ButtonLoadMore;
export default function ButtonLoadMore ({onClick}){
  return (
      <button type="button" onClick={onClick} className = {sty.ButtonLoadMore}>Load more</button>
  )
}

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired
}