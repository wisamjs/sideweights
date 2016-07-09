import React, { Component } from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import { fromJS, toJS } from 'immutable';
import Immutable from 'immutable';
import Weight from '../components/Weight';
import Label from '../components/Label';
import Barbell from '../components/Barbell';

import { makeArray } from '../utilities/helpers';
import { updateTotal, increaseTotalBy, clearTotal } from '../reducers/calculator';

import Keypad from '../containers/Keypad';

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
    onKeyPress: (val) => dispatch(updateTotal(val)),
    increaseBy: (val) => dispatch(increaseTotalBy(val)),
    clear: () => dispatch(clearTotal())
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

const SideWeight = ({ onIncrease, onDecrease, onKeyPress, increaseBy, clear, total, tiny, small, medium, big, bigger, huge}) => {
  return (
    <div className="container flex flex-column justify-between flex-auto">
     <div className="head" style={styles.head}>
        <h1 style={styles.title}>Side Weights</h1>
        <Barbell/>
      </div>



      <div className="flex flex-column" style={styles.weights}>

        <div className="flex justify-around">
          <div className="flex flex-column">
          <Weight type="tiny" amount="2.5" disabled={tiny == false}></Weight>
          <Label style={tiny ? {} : styles.disabled} > {tiny} per side</Label>
        </div>
        <div className="flex flex-column">
          <Weight type="small" amount="5" disabled={small == false}></Weight>
          <Label style={small ? {} : styles.disabled}>{small} per side</Label>
        </div>
        <div className="flex flex-column" >
          <Weight type="medium" amount="10" disabled={medium == false}></Weight>
          <Label style={medium ? {} : styles.disabled}>{medium} per side</Label>
        </div>
      </div>

      <div className="flex justify-around" style={styles.weightsBorder}>
        <div className="flex flex-column">
            <Weight type="big" amount="25" disabled={big == false}></Weight>
          <Label style={big ? {} : styles.disabled} >{big} per side</Label>
          </div>
          <div className="flex flex-column">
            <Weight type="bigger" amount="35" disabled={bigger == false}></Weight>
            <Label style={bigger ? {} : styles.disabled} >{bigger} per side</Label>
          </div>
          <div className="flex flex-column">
            <Weight type="huge" amount="45" disabled={huge == false}></Weight>
            <Label style={huge ? {} : styles.disabled} >{huge} per side</Label>
          </div>
        </div>

      </div>

      <div>
        <p style={styles.weightDisplay}>{total}</p>
      </div>

      <Keypad className="keypad flex flex-column" styles={styles.keypad} actions ={{onKeyPress, increaseBy, clear}}/>
    </div>

  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%'
  },
  disabled: {
    visibility: 'hidden'
  },
  keys: {
  },
  keypad: {
    marginTop: '20px',
    width: '100%'
  },
  weightsBorder: {
    marginTop: '10px',
    paddingTop: '10px'
  },
  weights: {
    marginBottom: '10px',
    minHeight: '115px'
  },
  title: {
    textAlign: 'center',
    fontSize: '55px',
    margin: 0
  },
  head: {
    margin: '10px'
  },
  weightDisplay: {
    fontSize: '60px',
    fontWeight: '200',
    color: '#81BDE3',
    width: '100%',
    border: 'none',
    textAlign: 'center',
    margin: 0,
    border: '1px solid'
  }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideWeight);

