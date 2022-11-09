import React from "react";
import { useTodoContext } from "./TodoContext";

const TodoList = () => {
  const { todoList, removeTodo } = useTodoContext();

  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          {todo}
          <button type="submit" onClick={() => removeTodo(index)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
