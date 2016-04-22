import React, { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import { changeTotal } from '../reducers/calculator';

import Button from '../components/Button';
import WeightGrid from './WeightGrid';
import Input from '../components/Input';

function mapStateToProps(state) {
  return {
    total: state.calculator.get('total')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(changeTotal(parseInt(e.target.value)))
  };
}

const App = ({ onIncrease, onDecrease, onChange, total, tiny}) => {
  return (
    <div>
    <WeightGrid/>
      <h1>{ total }</h1>
      <input type="number" pattern="\d*"  value={total}  onChange={onChange}/>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
