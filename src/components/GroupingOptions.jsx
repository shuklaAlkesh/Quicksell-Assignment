// import React from 'react';

// function GroupingOptions({ grouping, setGrouping, ordering, setOrdering }) {

//   return (
//     <div className="grouping-options">
//       <label>
//         Grouping:
//         <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
//           <option value="status">Status</option>
//           <option value="user">User</option>
//           <option value="priority">Priority</option>
//         </select>
//       </label>
//       <label>
//         Ordering:
//         <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
//           <option value="priority">Priority</option>
//           <option value="title">Title</option>
//         </select>
//       </label>
//     </div>
//   );
// }

// export default GroupingOptions;

import React, { useState } from 'react';
import '../styles/GroupingOptions.css';

function GroupingOptions({ grouping, setGrouping, ordering, setOrdering }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grouping-options">
      <button className="display-button" onClick={toggleDropdown}>
        Display Options
      </button>

      {isOpen && (
        <div className="dropdown">
          <div className='dropdown-option'>
          <span>
              Grouping:
            </span>
            <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className='dropdown-option'>
          <span>
            Ordering:
            </span>
            <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default GroupingOptions;

