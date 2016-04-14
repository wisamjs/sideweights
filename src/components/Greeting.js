import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Greeting = ( {children }) => {
  return (
    <h1> { children } </h1>
    );
};

Greeting.defaultProps = {};

Greeting.propTypes = {
  children: PropTypes.node.isRequired
};

export default Greeting;
