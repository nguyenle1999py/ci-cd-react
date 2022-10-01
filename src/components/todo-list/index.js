import { useContext } from "react";
import TodoItem from "../todo-item";
import { TodoContext } from "../todo-provider";

const TodoList = () => {
  const { todoList, setCheckedTodo } = useContext(TodoContext);
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <li key={todo.title}>
            <TodoItem
              value={todo.title}
              checked={todo.isChecked}
              setCheckedTodo={setCheckedTodo}
              id={todo.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
