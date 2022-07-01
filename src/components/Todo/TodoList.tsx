import React, { useContext } from "react";

import { Todo } from "./Todo";
import { Store } from "../../store/Store";

export const TodoList = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);

  const todoList = state.todoList.map((todo: any, idx: number) => (
    <Todo
      key={idx}
      todoId={todo.id}
      todoText={todo.text}
      todoTag={todo.tag}
      dispatch={dispatch}
    />
  ));

  return <div className="todo-list">{todoList}</div>;
};
