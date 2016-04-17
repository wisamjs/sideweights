import React, { PropTypes } from 'react';

const Weight = ({amount, type}) => {
  return (
    <div style={{...styles.outer}} className={type}>
      <div style={{...styles.inner}}>
        <div style={{...styles.content}}>{amount} lbs</div>
      </div>
    </div>
    );
}

Weight.defaultProps  = {
  amount: 2.5,
  type: 'red'
};

Weight.propTypes = {
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

const styles = {
  outer: {
  height: '100px',
  width: '100px',
  borderRadius: '50%'
  },
  inner: {
    backgroundColor: '#313131',
    color: '#efefef',
    margin: '5px',
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: '1 1 auto',
    marginBottom: '10px',
    textAlign: 'center',
    fontWeight: '100',
    fontFamily: 'Helvetica Neue',
    fontSize: '20pt'
  }
}

export default Weight;
