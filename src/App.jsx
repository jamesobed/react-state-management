// App.js
import React from "react";
import { UserProvider } from "./UserContext";
import FetchButton from "./FetchButton";
import UserList from "./UserList";
import UserInput from "./UserInput";
import UserDetails from "./UserDetails";

function App() {
  return (
    <UserProvider>
      <div>
        <h1>React Context Fetch Example</h1>
        <FetchButton />
        <UserList />
        <UserInput />
        <UserDetails />
      </div>
    </UserProvider>
  );
}

export default App;
