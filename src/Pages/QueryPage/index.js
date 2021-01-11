import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import GetAllUsers from "../../Components/UsersList";
import GetUser from "../../Components/GetUserForm";
import Post from "../../Components/Post";
import Header from "../../Components/Header";

import { GET_POST } from "../../graphql/actions/getPost";

const QueryPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loadPostData, { called, loading, data }] = useLazyQuery(GET_POST);

  useEffect(() => {
    if (selectedPost) {
      loadPostData({
        variables: { title: selectedPost.title },
      });
    }
  }, [selectedPost]);

  return (
    <div className="wrapper">
      <Header path="/mutations" title="Mutations" />
      <div>
        <h1>Users</h1>
        <GetAllUsers setUser={setSelectedUser} selectedUser={selectedUser} />
      </div>
      <div className="posts">
        <div>
          <h1>Users posts</h1>
          <GetUser selectedUser={selectedUser} selectPost={setSelectedPost} />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : data ? (
          <Post title={data.getPost.title} text={data.getPost.data} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default QueryPage;
