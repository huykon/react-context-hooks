const addTodo = (state: { todoList: string | any[] }, todoText: string) => {
  const newTodo = {
    id:
      (state.todoList.length > 0 &&
        state.todoList[state.todoList.length - 1].id + 1) ||
      0,
    text: todoText,
    tag: "active",
  };

  return { ...state, todoList: [...state.todoList, newTodo] };
};

const removeTodo = (state: { todoList: any[] }, todoId: string) => {
  const newTodoList = state.todoList.filter(
    (todo: { id: string }) => todo.id !== todoId
  );

  return { ...state, todoList: newTodoList };
};

const editTodoTag = (state: { todoList: any[] }, todoId: any, tag: any) => {
  const todo = state.todoList.find((todo) => todo.id === todoId);
  const todoIndex = state.todoList.indexOf(todo);
  const newTodo = { ...todo, tag };

  const newTodoList = [
    ...state.todoList.slice(0, todoIndex),
    newTodo,
    ...state.todoList.slice(todoIndex + 1),
  ];

  return { ...state, todoList: newTodoList };
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodo(state, action.todoText);
    case "REMOVE_TODO":
      return removeTodo(state, action.todoId);
    case "EDIT_TODO_TAG":
      return editTodoTag(state, action.todoId, action.tag);
    default:
      return state;
  }
};
