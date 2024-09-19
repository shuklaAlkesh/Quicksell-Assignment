import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import GroupingOptions from './components/GroupingOptions';
import { fetchTicketsAndUsers } from './api.js';
import './styles/App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');

  useEffect(() => {
    fetchTicketsAndUsers().then(data => {
      setTickets(data.tickets);
      console.log(data.tickets)
      console.log(data.users)
      setUsers(data.users);
    });
  }, []);

  return (
    <div className="App">
      <GroupingOptions
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <Board tickets={tickets} users={users} grouping={grouping} ordering={ordering} />
    </div>
  );
}

export default App;
