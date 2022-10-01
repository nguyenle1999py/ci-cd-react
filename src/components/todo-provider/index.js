import { createContext, useState } from "react";

const initState = {
  todoList: [],
};

export const TodoContext = createContext(initState);

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
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
    <TodoContext.Provider
      value={{
        todoList,
        setCheckedTodo,
        addTodoItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
