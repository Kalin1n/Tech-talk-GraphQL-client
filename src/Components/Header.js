import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_USER_BY_TOKEN } from "../graphql/actions/getUserByToken";

const Header = ({ path, title }) => {
  const { loading, error, data } = useQuery(GET_USER_BY_TOKEN, {
    variables: { token: localStorage.getItem("@gql-demo-token") },
  });

  return (
    <header className="header">
      <Link to={path}>{title}</Link>
      {!data || loading ? (
        <span>Need to log in </span>
      ) : (
        <span>Logged in as : {data.getUserByToken.name}</span>
      )}
    </header>
  );
};

export default Header;
