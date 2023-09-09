// UserInput.js
import React, { useState } from "react";
import { useUserContext } from "./UserContext";

function UserInput() {
  const { fetchUserById } = useUserContext();
  const [userId, setUserId] = useState("");

  const handleFetchUser = () => {
    if (userId.trim() !== "") {
      fetchUserById(userId);
    }
  };

  return (
    <div>
      <h2>Get User by ID</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFetchUser}>Fetch User</button>
    </div>
  );
}

export default UserInput;
