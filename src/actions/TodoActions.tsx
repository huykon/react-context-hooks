export const addTodo = (todo: string, dispatch: any) => {
  dispatch({
    type: "ADD_TODO",
    todoText: todo,
  });
};

export const removeTodo = (todoId: string, dispatch: any) => {
  dispatch({
    type: "REMOVE_TODO",
    todoId,
  });
};

export const editTag = (todoId: string, tag: string, dispatch: any) => {
  dispatch({
    type: "EDIT_TODO_TAG",
    todoId,
    tag,
  });
};
