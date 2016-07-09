import React, { PropTypes } from 'react';
import Key from '../components/Key';

const NUMBERS = [1,2,3,4,5,6,7,8,9];
const Keypad = ({ className, styles, actions }) => {

  const NUMERIC_KEYS = NUMBERS.map( (num) => { return {name: num.toString(), value: num} });

  const SPECIAL_KEYS = [
    {name: '+5', value: 5, action: actions.increaseBy},
    {name: '0', value: 0, action: actions.onKeyPress },
    {name: 'C', value: 0, action: actions.clear}
  ];

  let numericKeys  = NUMERIC_KEYS.map(function({name, value}, id) {
    return <Key key={id} name={name} value={value} onClick={actions.onKeyPress}/>
  });

  let specialKeys = SPECIAL_KEYS.map(({name, value, action} ,id) => {
    return <Key key={id} name={name} value={value} onClick={action}/>
  })


  const keysByRow = [
    numericKeys.slice(0,3),
    numericKeys.slice(3,6),
    numericKeys.slice(6,9),
    specialKeys
    ].map((row, id) => {
      return <div key={id} className="flex">{row}</div>
    });

  return (
  <div className={className} style={styles}>{keysByRow}</div>

  );
};

export default Keypad;
