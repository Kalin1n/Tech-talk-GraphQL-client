import React, { useState } from "react";

import GetAllUsers from "../../Components/UsersList";
import GetUser from "../../Components/GetUserForm";

const QueryPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="wrapper">
      <div>
        <h2>All users</h2>
        <GetAllUsers setUser={setSelectedUser} />
      </div>
      <div>
        <h2>Get user</h2>
        <GetUser selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default QueryPage;
