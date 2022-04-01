// Coloque aqui suas actions
export const NEW_LOGIN = 'NEW_LOGIN';
export const ADD_WALLET = 'ADD_WALLET';

export const addNewLogin = (email) => ({
  type: NEW_LOGIN,
  value: email,
});

export const addWallet = (value) => ({
  type: ADD_WALLET,
  value,
});
