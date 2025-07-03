import gql from 'graphql-tag';

const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String
    status: String!
  }

  type Query {
    tasks: [Task]
    task(id: ID!): Task
  }

  type Mutation {
    addTask(title: String!, description: String, status: String!): Task
    updateTask(id: ID!, title: String, description: String, status: String): Task
    deleteTask(id: ID!): Boolean
  }
`;

export default typeDefs;
