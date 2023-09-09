// UserDetails.js
import React from "react";
import { useUserContext } from "./UserContext";

function UserDetails() {
  const { userData } = useUserContext();

  if (!userData || userData.length === 0) {
    return <p>No user data available.</p>;
  }

  const user = userData[0]; // Get the first (and only) user

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
}

export default UserDetails;
