import React from "react";
import { useQuery } from "@apollo/client";

import { GET_USERS } from "../graphql/actions/getUsers";

const UsersList = ({ setUser }) => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="usersWrapper">
      {data.getUsers.map(({ name, id }) => {
        return (
          <div onClick={() => setUser(name)} className="userCard">
            <p>{name}</p>
            <p>{id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
