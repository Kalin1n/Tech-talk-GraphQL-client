import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_USERS } from "../graphql/actions/getUsers";

const UsersList = ({ setUser, selectedUser }) => {
  const { loading, error, data } = useQuery(GET_USERS, {
    variables: { limit: 2 },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="usersWrapper">
      {data.getUsers.map(({ name, id }) => {
        return (
          <div
            onClick={() => setUser(name)}
            className={selectedUser === name ? "userCard selected" : "userCard"}
          >
            <p>{name}</p>
            <p>{id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
