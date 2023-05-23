import { useEffect } from 'react';
import sty from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
       return onClose();
      }
    };

    const handleClickAway = e => {
      if (e.target.className.includes('Modal_overlay')) {
        return onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClickAway);

    return () => {
      window.removeEventListener('keydown', handleKeyDown); 
      window.removeEventListener('click', handleClickAway);
    };
  },);

  return (
    <div className={sty.overlay}>
      <div className={sty.modal}>
        <img className={sty.modal__image} src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;