import React, { PropTypes } from 'react';

const Label = ({ children, style }) => {
  return (
    <label className="bold" style={ style }>{ children }</label>
  );
};

Label.defaultProps = {};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
