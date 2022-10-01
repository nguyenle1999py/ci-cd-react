const TodoItem = ({ checked, value, id, setCheckedTodo }) => {
  return (
    <div>
      <input
        type={"checkbox"}
        id={id}
        name={value}
        value={value}
        checked={checked}
        onChange={() => {
          setCheckedTodo(id);
        }}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default TodoItem;
