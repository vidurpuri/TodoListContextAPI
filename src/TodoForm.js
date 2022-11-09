import { useState } from "react";
import { useTodoContext } from "./TodoContext";

const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [todo, setTodo] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
