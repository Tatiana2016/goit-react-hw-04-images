import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled }) => (
  <div className="container">  
  <button type="button" className="button-more" onClick={onClick} disabled={disabled}>
    Load more
  </button>
  </div>  
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
