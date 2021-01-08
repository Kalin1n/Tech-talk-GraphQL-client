import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_USER } from "../graphql/actions/getUser";

const GetUserForm = ({ selectedUser }) => {
  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);

  useEffect(() => {
    if (selectedUser === null) {
      console.log("NO USER SELECTED");
    } else if (selectedUser) {
      getUser({ variables: { name: selectedUser } });
    } else {
      console.log("NO USER SELECTED");
    }
  }, [selectedUser]);

  useEffect(() => {
    console.log("Current data : ", data);
  }, [data]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data ? (
        data.getUser.posts.map(({ title, id }) => (
          <div key={id}>
            <p>{title}</p>
          </div>
        ))
      ) : (
        <h1>Please select user to see posts</h1>
      )}
    </div>
  );
};

export default GetUserForm;
