import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../graphql/actions/login.js";

const useForceUpdate = () => useState()[1];

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { client }] = useMutation(LOGIN_USER);
  const forceUpdate = useForceUpdate();

  const handleClick = async (name, password) => {
    const response = await loginUser({
      variables: { name: name, password: password },
    });
    if (response.data.login) {
      console.log("Token : ", response.data.login);
      localStorage.setItem("@gql-demo-token", response.data.login);
      window.location.reload();
    } else {
      console.log("UNATHORIZED");
    }
  };

  return (
    <div className="form">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        type="Password"
      />
      <button onClick={() => handleClick(name, password)} className="appButton">
        Log in
      </button>
    </div>
  );
};

export default LoginForm;
