import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) {
    return null;
  }

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleClickOutside = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleClickOutside}>
      <div className="modal" onKeyDown={handleKeyDown} tabIndex={0}>
        <img src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default Modal;
