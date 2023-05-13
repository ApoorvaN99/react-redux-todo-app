export const addTodo = (item) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: new Date().getTime(),
      text: item,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TASK',
    payload: id,
  };
};
