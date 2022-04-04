// Coloque aqui suas actions
export const NEW_LOGIN = 'NEW_LOGIN';
export const GET_EXPENSES = 'GET_EXPENSES';
export const GET_CURRENCIES = 'GET_CURRENCIES';

const URL = 'https://economia.awesomeapi.com.br/json/all';

export const addNewLogin = (email) => ({
  type: NEW_LOGIN,
  email,
});

export const getExpenses = (expenses) => ({
  type: GET_EXPENSES,
  expenses,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const fetchAPI = await fetch(URL);
    const getCurrency = await fetchAPI.json();
    const result = Array.from(Object.keys(getCurrency)).filter((i) => i !== 'USDT');
    dispatch(getCurrencies(result));
  };
}

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object
