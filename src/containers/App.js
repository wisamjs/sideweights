import React, { Component } from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import { fromJS, toJS } from 'immutable';
import Immutable from 'immutable';
import Weight from '../components/Weight';
import Label from '../components/Label';

import { makeArray } from '../utilities/helpers';
import { changeTotal } from '../reducers/calculator';

import Button from '../components/Button';
import Input from '../components/Input';

const BAR_WEIGHT = 45;
const WEIGHTS = [45, 35, 25, 10, 5, 2.5];

let hasPlate = (plate) => {
  return (num) => {
    let platesPerSide = Math.floor(num/plate/ 2);
    return makeArray(platesPerSide, plate);
  }
}


function mapStateToProps(state) {
  return {
    total: state.calculator.get('total'),
    tiny: calculateWeights(state.calculator.get('total'))[5].length,
    small: calculateWeights(state.calculator.get('total'))[4].length,
    medium: calculateWeights(state.calculator.get('total'))[3].length,
    big: calculateWeights(state.calculator.get('total'))[2].length,
    bigger: calculateWeights(state.calculator.get('total'))[1].length,
    huge: calculateWeights(state.calculator.get('total'))[0].length

  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(changeTotal(parseInt(e.target.value)))
  };
}

function getNoBarWeight(weight){
  return weight > BAR_WEIGHT ? weight - BAR_WEIGHT : 0;
}

function calculateWeights(weight) {
  let noBarWeight = getNoBarWeight(weight);

  return WEIGHTS.reduce((res, plate) => {
    let remaining = R.subtract(noBarWeight, 2 * R.sum(R.flatten(res.toJS())));
    let newPlates = hasPlate(plate)(remaining);
    return res.push(newPlates);
  }, fromJS([])).toJS();
}

const App = ({ onIncrease, onDecrease, onChange, total, tiny, small, medium, big, bigger, huge}) => {
  return (
    <div className="container flex flex-column items-start items-stretch ">
      <div className="head" style={styles.head}>
        <h1 style={styles.title}>Side Weights</h1>
      </div>

      <div className="flex flex-column" style={styles.weights}>

        <div className="flex justify-around">
          <div className="flex flex-column" style={tiny ? {} : styles.disabled}>
          <Weight type="tiny" amount="2.5" disabled={tiny == false}></Weight>
          <Label>{tiny}</Label>
        </div>
        <div className="flex flex-column" style={small ? {} : styles.disabled}>
          <Weight type="small" amount="5" disabled={small == false}></Weight>
          <Label>{small}</Label>
        </div>
        <div className="flex flex-column" style={medium ? {} : styles.disabled}>
          <Weight type="medium" amount="10" disabled={medium == false}></Weight>
          <Label>{medium}</Label>
        </div>
      </div>

      <div className="flex justify-around" style={styles.weightsBorder}>
        <div className="flex flex-column" style={big ? {} : styles.disabled}>
            <Weight type="big" amount="25" disabled={big == false}></Weight>
          <Label>{big}</Label>
          </div>
          <div className="flex flex-column" style={bigger ? {} : styles.disabled}>
            <Weight type="bigger" amount="35" disabled={bigger == false}></Weight>
            <Label>{bigger}</Label>
          </div>
          <div className="flex flex-column" style={huge ? {} : styles.disabled}>
            <Weight type="huge" amount="45" disabled={huge == false}></Weight>
            <Label>{huge}</Label>
          </div>
        </div>

      </div>

      <div>
        <input type="number" pattern="\d*"  value={total}  onChange={onChange} style={styles.input}/>
      </div>
    </div>

  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%'
  },
  disabled: {
   // border: '5px solid grey'
  },
  weightsBorder: {
    borderTop: '5px solid #E8F8E9',
    marginTop: '10px',
    paddingTop: '10px'
  },
  weights: {
    marginBottom: '10px',
    minHeight: '115px'
  },
  title: {
    textAlign: 'center',
    fontSize: '65px',
    margin: 0
  },
  head: {
    margin: '10px'
  },
  input: {
    fontSize: '60px',
    fontWeight: '200',
    color: '#81BDE3',

    width: '40%',
    textAlign: 'center',
    marginLeft: '30%',

  }


};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
