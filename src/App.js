import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";
import data from "./data/todo.json";
import { useState } from "react";
import TodoProvider from "./components/todo-provider";

function App() {
  const [todoList, setTodoList] = useState(data.todoList);
  const setCheckedTodo = (id) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isChecked: !todo.isChecked };
        }
        return { ...todo };
      });
    });
  };

  const addTodoItem = (value) => {
    setTodoList((prevState) => [
      { id: prevState.length + 1, title: value },
      ...prevState,
    ]);
  };

  return (
    <div className="App">
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
