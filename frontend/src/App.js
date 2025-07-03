import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <h1>MiniApp Task Manager</h1>
      <TaskForm />
      <TaskList />
    </ApolloProvider>
  );
}
