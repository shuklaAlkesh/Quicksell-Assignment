import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/api.js';
import Column from './Column';
import GroupBy from './GroupBy';
import Sorting from './Sorting';

import '../styles/KanbanBoard.css';


const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority'); // Sorting state

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    loadData();
  }, []);

  const sortTickets = (tickets) => {
    return [...tickets].sort((a, b) => {
      if (sortBy === 'priority') {
        return a.priority - b.priority;
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const statuses = ['Todo', 'In progress', 'Done', 'Backlog'];

  return (
    <div className="kanban-board">
      <GroupBy setGroupBy={setGroupBy} />
      <Sorting setSortBy={setSortBy} />
      <div className="columns">
        {groupBy === 'status' && statuses.map(status => (
          <Column key={status} status={status} tickets={sortTickets(tickets)} users={users} />
        ))}
        {groupBy === 'user' && users.map(user => (
          <Column key={user.id} status={user.name} tickets={sortTickets(tickets.filter(ticket => ticket.userId === user.id))} users={users} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
