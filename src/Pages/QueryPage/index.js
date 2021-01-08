import React, { useState } from "react";

import GetAllUsers from "../../Components/UsersList";
import GetUser from "../../Components/GetUserForm";

const QueryPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="wrapper">
      <div>
        <h1>Users</h1>
        <GetAllUsers setUser={setSelectedUser} />
      </div>
      <div>
        <h1>Users posts</h1>
        <GetUser selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default QueryPage;
