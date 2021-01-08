import React, { useEffect, useState } from "react";

import RegisterForm from "../../Components/Form";
import LoginForm from "../../Components/Login";
import CreatePostFrom from "../../Components/CreatePostForm";
import { Link } from "react-router-dom";

const MutationsPage = () => {
  const token = localStorage.getItem("@gql-demo-token");

  console.log("Rendering");
  return (
    <div className="wrapper">
      <Link to="/" style={{ alignSelf: "center" }}>
        Querys
      </Link>
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
