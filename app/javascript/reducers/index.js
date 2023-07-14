// reducers/index.js
import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import greetingReducer from './greetingReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  greeting: greetingReducer,
});

export default rootReducer;
