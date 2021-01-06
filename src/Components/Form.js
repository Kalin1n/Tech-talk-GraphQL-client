import React, { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";

import { client } from "../App";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const CREATE_USER = gql`
    mutation createUser($name: String!, $password: String!) {
      createUser(name: $name, password: $password) {
        name
      }
    }
  `;

  const [createUser, { data }] = useMutation(CREATE_USER);

  const handleSubmiit = async (name, password) => {
    console.log(name, password);
    createUser({
      variables: { name: name, password: password },
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
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
      <button onClick={() => handleSubmiit(name, password)}>Create user</button>
    </div>
  );
};

export default Form;
