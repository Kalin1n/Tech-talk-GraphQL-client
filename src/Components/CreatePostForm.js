import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_POST } from "../graphql/actions/createPost";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [createPost, { client }] = useMutation(CREATE_POST);

  const handleCreatePost = async (title, text) => {
    const token = localStorage.getItem("@gql-demo-token");
    console.log("");
    if (token) {
      const response = await createPost({
        variables: { token: token, title: title, data: text },
      });
      console.log(response);
    }
  };

  return (
    <div className="form">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
      />
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Text"
      />
      <button onClick={() => handleCreatePost(title, text)}>Create post</button>
    </div>
  );
};

export default NewPostForm;
