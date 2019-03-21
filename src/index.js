import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

// import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import RouterMap from "./router";
import config from "./config";

/* setting up graphql client connection to server */
const httpLink = new HttpLink({ uri: config.apiUri });
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
/* setting up graphql api server ends */

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <App /> */}
    <RouterMap />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
