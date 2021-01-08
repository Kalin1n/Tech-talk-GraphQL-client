import React from "react";

import RegisterForm from "../../Components/Form";
import LoginForm from "../../Components/Login";
import CreatePostFrom from "../../Components/CreatePostForm";

const MutationsPage = () => {
  return (
    <div className="wrapper">
      <div>
        <h2>Register</h2>
        <RegisterForm />
      </div>
      <div>
        <h2>Login</h2>
        <LoginForm />
      </div>
      <div>
        <h2>Create post</h2>
        <CreatePostFrom />
      </div>
    </div>
  );
};

export default MutationsPage;
