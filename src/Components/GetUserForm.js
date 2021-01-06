import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_USER } from "../graphql/actions/getUser";

const GetUserForm = ({ selectedUser }) => {
  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);

  useEffect(() => {
    getUser({ variables: { name: selectedUser } });
  }, [selectedUser]);

  useEffect(() => {
    console.log("Current data : ", data);
  }, [data]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data &&
        data.getUser.posts.map(({ title, id }) => (
          <div key={id}>
            <p>{title}</p>
          </div>
        ))}
      {!data && data.getUser.posts && <p>This user dont have posts</p>}
    </div>
  );
};

export default GetUserForm;
