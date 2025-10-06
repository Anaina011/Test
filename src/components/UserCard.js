import React from "react";
import "./UserCard.css";

function UserCard({ name, job, onRemove }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{job}</p>
      <button onClick={onRemove}>❌ Remove</button>
    </div>
  );
}

export default UserCard;
