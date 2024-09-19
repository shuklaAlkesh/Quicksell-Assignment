import React from 'react';

const GroupBy = ({ setGroupBy }) => {
  return (
    <div className="group-by">
      <label htmlFor="groupBy">Group by:</label>
      <select id="groupBy" onChange={e => setGroupBy(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default GroupBy;
