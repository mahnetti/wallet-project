// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_CURRENCIES, GET_EXPENSES } from '../actions';

const INITIAL_WALLET = {
  expenses: [0],
  currencies: ['BRL'],
};

function wallet(state = INITIAL_WALLET, action) {
  switch (action.type) {
  case GET_EXPENSES:
    return {
      ...state,
      expenses: action.expenses,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };

  default:
    return state;
  }
}

export default wallet;
