import React, { PropTypes }  from 'react';

const Input = ({ type, value, onChange, disabled, style, pattern }) => {
  return (
    <input
      type={ type }
      style={ style }
      pattern={ pattern}
      className="block col-12 mb1 field"
      disabled={ disabled }
      onChange={ onChange }
      value={ value } />
  );
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
  pattern:"",
  style: {}
};

Input.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string.isRequired
};

export default Input;
