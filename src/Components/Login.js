import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../graphql/actions/login.js";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { client }] = useMutation(LOGIN_USER);

  const handleClick = async (name, password) => {
    const response = await loginUser({
      variables: { name: name, password: password },
    });
    console.log(response);
  };

  return (
    <div>
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
      <button onClick={() => handleClick(name, password)}>Log in</button>
    </div>
  );
};

export default LoginForm;
