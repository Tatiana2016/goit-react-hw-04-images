import React from 'react';
import PropTypes from 'prop-types';
//import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const Loader = ({ type, color, height, width, size = 100 }) => {
  return <ClipLoader type={type} color={color} height={height} width={width} size={size} />;
};

Loader.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Loader;
