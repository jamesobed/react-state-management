import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchUserById = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUserData([data]); // Store the single user in an array to match the existing format
    } catch (error) {
      console.error("Error fetching user by ID:", error);
    }
  };

  return (
    <UserContext.Provider value={{ userData, fetchUserData, fetchUserById }}>
      {children}
    </UserContext.Provider>
  );
}
