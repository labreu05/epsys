/* eslint-disable */
export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

export const loginstore = () => {
  return {
    type: mainActions.MAIN_STORE_LOGOUT
  };
};

