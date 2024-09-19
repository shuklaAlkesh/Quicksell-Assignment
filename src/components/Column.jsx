import React from "react";
import TicketCard from "./TicketCard";
import "../styles/Column.css";
import { FaUserCircle } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { PiDotsThreeBold } from "react-icons/pi";
// import {Three_dot} from '../assets/._3 dot menu.svg'; // this file we can't be able to access show that i use react icons

import { RiProgress4Line } from "react-icons/ri";
const priorityLabels = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
};

const statuses = ["Backlog","Todo", "In progress", "Done","cancelled"];

function Column({ groupName, tickets, users, grouping, ordering }) {
  let label;

  if (grouping === "priority") {
    label = priorityLabels[groupName] || "Unknown Priority";
  } else if (grouping === "user") {
    const user = users.find((user) => user.id === groupName); 
    label = user ? user.name : "Unknown User";
  } else if (grouping === "status") {
    label = statuses.includes(groupName) ? groupName : "Unknown Status";
  }

  console.log(users);

  return (
    <div className="column">
      <div className="userHeader">
        <div className="userTag">
          {grouping === "user" && <FaUserCircle className="userIcon" />}
          {grouping === "priority" && groupName === "0" && <PiDotsThreeBold/>}
          {/* {grouping === "status" && <PiDotsThreeBold/>} */}
         
          <h3> {label} <span className="ticketLength">{tickets.length}</span></h3>
        </div>
        <div className="userTag">
          <IoAddOutline />
          <PiDotsThreeBold />
        </div>
      </div>
      
      <div className="tickets">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default Column;
