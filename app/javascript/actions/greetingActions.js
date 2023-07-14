import { SET_GREETING } from './types';

export const setGreeting = (greeting) => {
  return {
    type: SET_GREETING,
    payload: greeting,
  };
};
