// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_CURRENCIES, GET_EXPENSES } from '../actions';

const INITIAL_WALLET = {
  expenses: [],
  currencies: ['BRL'],
};

function wallet(state = INITIAL_WALLET, action) {
  console.log(action.expenses);
  switch (action.type) {
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
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
