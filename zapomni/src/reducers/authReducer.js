import {
  FETCH_TOKEN,
} from './../actions/types';

const INITIAL_STATE = {
  token: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return { ...state, token: action.payload }
    default:
      return state
  }
};