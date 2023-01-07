import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

const Todo = ({ todo, toggleComplete, handleDelete, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.completed == true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <center>
      <div className="flex max-w-[400px] bg-purple-300 items-center justify-center m-2 p-2 rounded-md">
        <button onClick={() => toggleComplete(todo)}>
          <CheckCircleIcon id="i" />
        </button>
        <input
          style={{
            textDecoration: todo.completed && "line-through",
            opacity: todo.completed && "0.3",
          }}
          type="text"
          value={todo.title == "" ? newTitle : todo.title}
          onChange={handleChange}
          className="px-3 py-2 rounded-md capitalize mx-2"
        />
        <div className="flex flex-row w-[80px] justify-evenly text-4xl">
          <button onClick={() => handleEdit(todo, newTitle)}>
            <ModeEditIcon id="i" />
          </button>
          <button onClick={() => handleDelete(todo.id)}>
            <DeleteIcon id="i" />
          </button>
        </div>
      </div>
    </center>
  );
};
export default Todo;
