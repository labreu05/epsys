import { createStore } from 'redux';
import reducers from './reducers/index';

const initialState = {
  main: {
    todos: [],
  },
};

const store = createStore(reducers, initialState);

export default store;
