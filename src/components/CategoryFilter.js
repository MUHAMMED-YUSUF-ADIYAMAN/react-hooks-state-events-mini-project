import React from "react";

function CategoryFilter({ categories, setSelectedCategory, selectedCategory }) {
  

  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories && categories.map((category) => (
        <button
          key={category}
          name={category}
          value={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={(e) => setSelectedCategory(e.target.name)}
        >
          {category}
        </button>
      ))}

      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
