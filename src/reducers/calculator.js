import { fromJS } from 'immutable';

export const UPDATE_TOTAL = '@@app/UPDATETOTAL';
export const INCREASE_TOTAL = '@@app/INCREASETOTAL';
export const CLEAR_TOTAL = '@@app/CLEARTOTAL';

const INITIAL_BAR_WEIGHT = 45;

const INITIAL_STATE = fromJS({
  total: 135
});

function calculatorReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case UPDATE_TOTAL:
      return state.update('total', (total) => parseInt(total.toString().concat(action.payload)));

    case INCREASE_TOTAL:
      return state.update('total', (total) => total + action.payload);

    case CLEAR_TOTAL:
      return state.update('total', (total) => 0);

    default:
      return state;
  }
}


export function updateTotal(val) {
  return {type: UPDATE_TOTAL, payload: val}
}

export function increaseTotalBy(val) {
  val = val || 0;
  return { type: INCREASE_TOTAL, payload: val };
}

export function clearTotal() {
  return { type: CLEAR_TOTAL };
}

export default calculatorReducer;
