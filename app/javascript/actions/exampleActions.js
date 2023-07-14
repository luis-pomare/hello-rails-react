import { EXAMPLE_ACTION } from './types';

export const exampleAction = (data) => {
  return {
    type: EXAMPLE_ACTION,
    payload: data,
  };
};
