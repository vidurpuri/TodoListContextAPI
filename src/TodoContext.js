import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(["Learning ContextAPI"]);
  const addTodo = (newItem) => {
    setTodoList([...todoList, newItem]);
  };
  const removeTodo = (todoIndex) => {
    const newItem = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newItem);
  };
  return (
    <TodoContext.Provider value={{ todoList, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
