import React, { useState } from "react";
import UserCard from "./UserCard";
import "./UserList.css";

function UserList() {
  // Step 1: initial data
  const [users, setUsers] = useState([
    { id: 1, name: "Anaina S S", job: "Web Developer" },
    { id: 2, name: "John Doe", job: "UI Designer" }
  ]);

  // Step 2: controlled input fields
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  // Step 3: add new user
  const addUser = (e) => {
    e.preventDefault(); // prevent page reload
    if (!name.trim() || !job.trim()) return alert("Please fill all fields");

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      job: job.trim()
    };

    setUsers([...users, newUser]); // add to state
    setName(""); // clear input
    setJob("");
  };

  // Step 4: remove user
  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-list">
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <div className="cards">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            job={user.job}
            onRemove={() => removeUser(user.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default UserList;
