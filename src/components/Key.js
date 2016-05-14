import React, { PropTypes } from 'react';

const Key = ({onClick, name, value}) => {
  return (
    <button style={style} onClick={() => onClick(value)}>{name}
    </button>
    )

};

Key.defaultProps = {
  value: 0,
  name: '0',
  onClick: () => {}
}

Key.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

const style = {
  padding: '10px 15px',
  width: '33%',
  background: 'rgba(255, 255, 255, 0.4)',
  color: '#fff',
  border: '1px solid #fff',
  margin: '5px 5px',
  borderRadius: '5px',
  fontSize: '35px',
  fontFamily: 'Cardo'
}

export default Key;


/**
 * Keeping this cool codepen for reference
 * http://codepen.io/magnificode/pen/eZOLpa
 */
