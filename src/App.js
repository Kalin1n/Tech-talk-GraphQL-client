import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { Router, Route, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import MutationsPage from "./Pages/MutationsPage";
import QueryPage from "./Pages/QueryPage";

import client from "./graphql";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path="/mutations" component={MutationsPage} exact />
          <Route path="/" component={QueryPage} exact />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
