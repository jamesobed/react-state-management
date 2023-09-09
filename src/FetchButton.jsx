// FetchButton.js
import React from "react";
import { useUserContext } from "./UserContext";

function FetchButton() {
  const { fetchUserData } = useUserContext();

  return <button onClick={fetchUserData}>Fetch User Data</button>;
}

export default FetchButton;
