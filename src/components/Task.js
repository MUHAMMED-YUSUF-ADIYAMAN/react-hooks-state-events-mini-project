import React from "react";

function Task({ text, category, deleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button
        className="delete"
        name={text}
        onClick={(e) => deleteTask(e.target.name)}
      >
        X
      </button>
    </div>
  );
}

export default Task;
