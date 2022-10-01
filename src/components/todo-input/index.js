import { useContext, useState } from "react";
import { TodoContext } from "../todo-provider";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const onInputChange = (e) => {
    setValue(e.target.value);
  };
  const { addTodoItem } = useContext(TodoContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input value={value} onChange={onInputChange} />
      <button
        onClick={() => {
          addTodoItem(value);
        }}
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
