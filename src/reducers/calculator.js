import { fromJS } from 'immutable';



export const CHANGETOTAL = '@@app/CHANGETOTAL';

const INITIAL_STATE = fromJS({
  total: 0,
  tiny: 0,
  small: 0,
  medium: 0,
  big: 0,
  bigger: 0,
  huge: 0
});

function calculatorReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CHANGETOTAL:
      return state.set('total', action.payload);

    default:
      return state;
  }
}

export function changeTotal(val) {
  val = val || 0;
  return { type: CHANGETOTAL, payload: val };
}

export default calculatorReducer;
