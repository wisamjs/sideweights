import React, { PropTypes } from 'react';

const Barbell = ({ color }) => {
  return (
    <svg viewBox="0 0 134 7" xmlns="http://www.w3.org/2000/svg">
    <path d="M133.034 5.213V1.82H111.68V.12h-5.374v2.262H27.534V.12H22.16V1.82H.805v3.393H22.16V6.91h5.374V4.648h78.772V6.91h5.374V5.213h21.354z" fill="#fff" fill-rule="evenodd"/>
    </svg>
  );
}

Barbell.defaultProps = {
  color: '#fff'
}

Barbell.propTypes = {
  color: PropTypes.string.isRequired
}


export default Barbell;

