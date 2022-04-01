// Esse reducer será responsável por tratar as informações da pessoa usuária
import { NEW_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_LOGIN:
    return {
      ...state,
      email: action.value,
    };
  default:
    return state;
  }
}

export default user;
