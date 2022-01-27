import logo from "./logo.svg";
import "./App.css";

import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from "@apollo/client";
import Test from "components/Test";
import Todo from "components/Todo";

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  credentials: "include",
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  errorPolicy: "all",
  connectToDevTools: process.env.REACT_APP_NODE_ENV === "development",
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Todo />
    </ApolloProvider>
  );
}

export default App;
