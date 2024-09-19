import React from "react";
import Column from "./Column";
import "../styles/Board.css";

function Board({ tickets, users, grouping, ordering }) {

  const groupTickets = () => {
    if (grouping === "user") {
      return tickets.reduce((acc, ticket) => {
        const user = users.find((user) => user.id === ticket.userId);
        if (!acc[user.id]) {
          acc[user.id] = [];
        }
        acc[user.id].push(ticket);
        return acc;
      }, {});
    } else if (grouping === "priority") {
      return tickets.reduce((acc, ticket) => {
        const priority = ticket.priority; 
        if (!acc[priority]) {
          acc[priority] = [];
        }
        acc[priority].push(ticket);
        return acc;
      }, {});
    } else {
      return tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        if (!acc[status]) {
          acc[status] = [];
        }
        acc[status].push(ticket);
        return acc;
      }, {});
    }
  };

  const groupedTickets = groupTickets();

  const sortedTickets = (ticketsArray) => {
    if (ordering === "priority") {
      return ticketsArray.sort((a, b) => b.priority - a.priority);
    } else {
      return ticketsArray.sort((a, b) => a.title.localeCompare(b.title));
    }
  };

  return (
    <div className="board">
      {Object.keys(groupedTickets).map((groupName) => (
        <Column
          key={groupName}
          groupName={groupName}
          tickets={sortedTickets(groupedTickets[groupName])}
          users={users}
          grouping={grouping}
          ordering = {ordering}
        />
      ))}
    </div>
  );
}

export default Board;
