import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_USER } from "../graphql/actions/getUser";
import PostPreview from "../Components/PostPreview";

const GetUserForm = ({ selectedUser, selectPost }) => {
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleSelect = (title, id) => {
    selectPost({ title, id });
  };

  return (
    <div className="postsWrap">
      {data ? (
        data.getUser.posts.length ? (
          data.getUser.posts.map(({ title, id }) => (
            <PostPreview id={id} title={title} handleSelect={handleSelect} />
          ))
        ) : (
          <p>This user dont have posts</p>
        )
      ) : (
        <h1>Please select user to see posts</h1>
      )}
    </div>
  );
};

export default GetUserForm;
