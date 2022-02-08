import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const itemsToDisplay = tasks.filter((Task) => {
    if (selectedCategory === "All") return true;

    return Task.category === selectedCategory;
  });

  const categoriesSelected = CATEGORIES.filter((Task) => Task !== "All");

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }
  function deleteTask(deleteTask) {
    const temp = tasks.filter((Task) => {
      if (Task.text === deleteTask) return false;
      else return true;
    });
    setTasks(temp);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={categoriesSelected}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={itemsToDisplay} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
