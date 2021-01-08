import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import GetAllUsers from "../../Components/UsersList";
import GetUser from "../../Components/GetUserForm";
import { Link } from "react-router-dom";

import { GET_POST } from "../../graphql/actions/getPost";

const QueryPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loadPostData, { called, loading, data }] = useLazyQuery(GET_POST);

  useEffect(async () => {
    if (selectedPost) {
      const response = await loadPostData({
        variables: { title: selectedPost.title },
      });
      console.log("Response : ", response);
    }
  }, [selectedPost]);

  useEffect(() => {
    if (data) {
      console.log(data.getPost);
    }
  }, [data]);

  return (
    <div className="wrapper">
      <Link to="/mutations" style={{ alignSelf: "center" }}>
        Mutations
      </Link>
      <div>
        <h1>Users</h1>
        <GetAllUsers setUser={setSelectedUser} />
      </div>
      <div className="posts">
        <div>
          <h1>Users posts</h1>
          <GetUser selectedUser={selectedUser} selectPost={setSelectedPost} />
        </div>
        {data ? (
          <div>
            <p>Title : {data.getPost.title}</p>
            <p>Post Text : {data.getPost.data}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default QueryPage;
