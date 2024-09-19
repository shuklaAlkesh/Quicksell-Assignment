import React from 'react';

const Sorting = ({ setSortBy }) => {
  return (
    <div className="sorting">
      <label htmlFor="sortBy">Sort by:</label>
      <select id="sortBy" onChange={(e) => setSortBy(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default Sorting;
