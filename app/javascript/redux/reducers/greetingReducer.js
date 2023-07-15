// reducers/greetingReducer.js
import { SET_GREETING } from '../actions/types';

const initialState = {
  text: '',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETING:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default greetingReducer;
