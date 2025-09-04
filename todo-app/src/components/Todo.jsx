import React, { useState } from "react";
import "./Todo.css";

function Todo({ list, setList }) {
  const [task, setTask] = useState("");

  function handleAdd() {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  }

  function handleDel(index) {
    setList(list.filter((_, i) => i !== index));
  }

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <div className="main-content">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="AddTask"
          placeholder="Enter Task"
        />
        <button onClick={handleAdd} className="add">
          ADD
        </button>
        <div className="scrollable">
        {list.map((item, index) => {
          return (
            <dv className="display">
              <input  key={index} value={item} readOnly />
              <button onClick={() => handleDel(index)} className="delete">
                Delete
              </button>
            </dv>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
