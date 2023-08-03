import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);
  const [editIndex, setEditindex] = useState(null);

  const handlechange = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (!todo) {
      return;
    }
    if (editIndex || editIndex === 0) {
      // let temp = [...todoList];
      // temp.splice(editIndex, 1, todo);
      // setTodolist(temp);
      setTodolist((preTodoList) =>
        preTodoList.map((_, i) => (i === editIndex ? todo : todoList))
      );
      setEditindex(null);
    } else {
      setTodolist((prevalues) => [...prevalues, todo]);
    }
    setTodo("");
  };

  const handleEdit = (value, index) => {
    setTodo(value);
    setEditindex(index);
  };

  const handleDelete = (deleteIndex) => {
    // let temp = [...todoList];
    // temp.splice(deleteIndex, 1);
    // setTodolist([...temp]);

    setTodolist((preTodoList) =>
      preTodoList.filter((_, i) => i !== deleteIndex)
    );
  };

  const display = todoList.map((value, i) => (
    <span className="row">
      <div class="content">
        {`${i + 1}  ${value}`}
        <br />
        <br />
        <button class="edit" onClick={() => handleEdit(value, i)}>
          Edit
        </button>
        &nbsp;
        <button class="delete" onClick={() => handleDelete(i)}>
          Delete
        </button>
      </div>
    </span>
  ));

  return (
    <div class="page">
      <h3>Enter your todo details</h3>
      <input
        type="text"
        placeholder="Enter todo"
        value={todo}
        onChange={handlechange}
      />
      <br />
      <br />
      <button class="btntask" onClick={addTodo}>
        {editIndex || editIndex === 0 ? "Update" : "Add task"}
      </button>
      <div>
        <h3>Todo list</h3>
        {display}
      </div>
    </div>
  );
};
export default App;
