import { combineReducers } from 'redux';

const initialState = {
  todos: [],
};

function main(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
    // console.log(action);
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ],
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  main,
});

export default reducers;
