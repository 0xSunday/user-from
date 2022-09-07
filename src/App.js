import React, { useState } from "react";
import AddUser from "./User/AddUser";
import UserList from "./User/UserList";

function App() {
  const [userList, setUserlist] = useState([]);
  const addUserHandle = (uname, uage) => {
    setUserlist((prevValue) => {
      return [...prevValue, { name: uname, age: uage }];
    });
  };
  return (
    <div>
      <AddUser onUserList={addUserHandle} />
      <UserList  users={userList} />
    </div>
  );
}

export default App;
