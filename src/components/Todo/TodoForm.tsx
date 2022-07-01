import React, { useState, useContext } from "react";

import { addTodo } from "../../actions";
import { Store } from "../../store/Store";

import "./TodoForm.scss";

export const TodoForm = () => {
  const { dispatch } = useContext(Store);
  const [todo, setTodo] = useState<string>("");

  const handleTodoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleTodoSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    todo.trim().length > 0 && addTodo(todo, dispatch);
    setTodo("");
  };

  return (
    <form onSubmit={handleTodoSubmit} className="todo-form">
      <input type="text" value={todo} onChange={handleTodoInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
