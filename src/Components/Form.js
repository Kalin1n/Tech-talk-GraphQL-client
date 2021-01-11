import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_USER_AND_LOGIN } from "../graphql/actions/createUser";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [createUser] = useMutation(CREATE_USER_AND_LOGIN);

  const handleSubmiit = async (name, password) => {
    console.log(name, password);
    const response = await createUser({
      variables: { name: name, password: password },
    });

    console.log("response data  : ", response.data);
    if (response.data.login) {
      localStorage.setItem("@gql-demo-token", response.data.login);
    }
  };

  return (
    <div className="form">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        type="text"
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        type="password"
      />
      <button
        onClick={() => handleSubmiit(name, password)}
        className="appButton"
      >
        Create user
      </button>
    </div>
  );
};

export default Form;
