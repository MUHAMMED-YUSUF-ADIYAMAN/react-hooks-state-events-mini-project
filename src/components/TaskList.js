import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks && tasks.map((task) => (
        <Task
          className="task"
          key={task.text}
          text={task.text}
          category={task.category}
          deleteTask={deleteTask}
        />
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
