// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_WALLET } from '../actions';

const INITIAL_WALLET = {
  expenses: [],
  currencies: [],
  currency: 'BRL',
};

function wallet(state = INITIAL_WALLET, action) {
  switch (action.type) {
  case ADD_WALLET:
    return {
      ...state,
      wallet: action.value,
    };
  default:
    return state;
  }
}

export default wallet;
