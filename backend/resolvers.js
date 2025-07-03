import tasks from './tasks.js';

let idCounter = tasks.length + 1;

const resolvers = {
  Query: {
    tasks: () => tasks,
    task: (_, { id }) => tasks.find(t => t.id === id),
  },
  Mutation: {
    addTask: (_, { title, description, status }) => {
      const newTask = { id: String(idCounter++), title, description, status };
      tasks.push(newTask);
      return newTask;
    },
    updateTask: (_, { id, title, description, status }) => {
      const task = tasks.find(t => t.id === id);
      if (!task) return null;
      if (title !== undefined) task.title = title;
      if (description !== undefined) task.description = description;
      if (status !== undefined) task.status = status;
      return task;
    },
    deleteTask: (_, { id }) => {
      const index = tasks.findIndex(t => t.id === id);
      if (index === -1) return false;
      tasks.splice(index, 1);
      return true;
    },
  },
};

export default resolvers;
