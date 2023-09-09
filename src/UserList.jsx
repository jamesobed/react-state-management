// UserList.js
import React from 'react';
import { useUserContext } from './UserContext';

function UserList() {
  const { userData } = useUserContext();

  if (!userData) {
    return <p>No user data available.</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
