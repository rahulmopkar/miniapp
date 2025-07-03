import { useQuery, gql } from "@apollo/client";
import React from "react";

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      status
    }
  }
`;

export default function TaskList() {
  const { loading, error, data } = useQuery(GET_TASKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.tasks.map(({ id, title, status }) => (
        <li key={id}>
          {title} - {status}
        </li>
      ))}
    </ul>
  );
}
