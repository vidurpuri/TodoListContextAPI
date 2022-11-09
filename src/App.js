import "./styles.css";
import TodoProvider from "./TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}
