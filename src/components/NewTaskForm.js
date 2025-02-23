import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState();
  const [category, setCategory] = useState("Code");

 

  return (
    <form
      className="new-task-form"
      onSubmit={(e) => {
        e.preventDefault();
        onTaskFormSubmit({ "text": text,"category": category});
      }}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          {categories && categories.map((category) => (
            <option key={category} name={category} >
              {category}
            </option>
          ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
