import React, { PropTypes } from 'react';

const Weight = ({amount, type, disabled}) => {

  return (
    <div style={{...styles.outer}} className={ disabled ? 'disabled' : type }>
      <div style={{...styles.inner}}>
        <div style={{...styles.content}}>{amount} lbs</div>
      </div>
    </div>
    );
}

Weight.defaultProps  = {
  amount: 2.5,
  type: 'red',
  disabled: false
};

Weight.propTypes = {
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
}

const styles = {
  outer: {
  height: '108px',
  width: '90px',
  borderRadius: '50%'
  },
  disabled: {
    border: '5px solid grey'
  },
  inner: {
    backgroundColor: '#313131',
    color: '#efefef',
    width: '80px',
    height: '74px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: '1 1 auto',
    marginBottom: '5px',
    textAlign: 'center',
    fontWeight: '100',
    fontFamily: 'Helvetica Neue',
    fontSize: '20pt'
  }
}

export default Weight;
