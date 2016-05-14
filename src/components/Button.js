import React, { PropTypes } from 'react';

const buttonStatus = {
  success: 'bg-green',
  warning: 'bg-orange',
  primary: 'bg-blue',
  danger: 'bg-red'
}

const Button = ({onClick, status, children, style }) => {
  return (
    <button
      onClick={ onClick }
      style={style}>
      { children }
    </button>
  );
};

Button.defaultName = 'Button';
Button.propTypes = {
  /**
   * The content of the button
   */
  children: PropTypes.node,
  /**
   * The type of button
   */
  /**
   * The status of type of the button
   */
  status: PropTypes.oneOf(['success', 'warning', 'primary', 'danger']),
  /**
   * The onClick function of the button
   */
  onClick: PropTypes.func,

  style: PropTypes.object
};
Button.defaultProps = {
  onClick: () => {},
  status: 'primary',
  style: {}
};

export default Button;
