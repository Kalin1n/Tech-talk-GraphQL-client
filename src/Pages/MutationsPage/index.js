import React from "react";

import RegisterForm from "../../Components/Form";
import LoginForm from "../../Components/Login";
import CreatePostFrom from "../../Components/CreatePostForm";
import Header from "../../Components/Header";

const MutationsPage = () => {
  const token = localStorage.getItem("@gql-demo-token");

  return (
    <div className="wrapper">
      <Header path="/" title="Querys" />
      {token ? (
        <div>
          <h2>Create post</h2>
          <CreatePostFrom />
        </div>
      ) : (
        <>
          <div>
            <h2>Register</h2>
            <RegisterForm />
          </div>
          <div>
            <h2>Login</h2>
            <LoginForm />
          </div>
        </>
      )}
    </div>
  );
};

export default MutationsPage;
