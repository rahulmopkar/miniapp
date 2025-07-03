import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";

const ADD_TASK = gql`
  mutation AddTask($title: String!, $status: String!, $description: String) {
    addTask(title: $title, status: $status, description: $description) {
      id
      title
    }
  }
`;

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("OPEN");
  const [addTask] = useMutation(ADD_TASK);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ variables: { title, status } });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
