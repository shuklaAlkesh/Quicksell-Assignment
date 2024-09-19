import React from 'react';
import '../styles/TicketCard.css';

function TicketCard({ ticket }) {
  const priorityLabels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

  return (
    <div className="ticket-card">
     <p>{ticket.id}</p>
      <h3>{ticket.title}</h3>
      {/* <p>Priority: {priorityLabels[ticket.priority]}</p> */}
      <div className="tags">
        {ticket.tag.map((t, index) => (
          <span key={index} className="tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default TicketCard;
