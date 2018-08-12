import React, { createContext } from 'react';

export const initialTasks = [
  { id: 0, title: 'Task0', done: false },
  { id: 1, title: 'Task1', done: false },
  { id: 2, title: 'Task2', done: false }
];

export const TasksContext = createContext({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  changeTaskStatus: () => {}
});

export const withTasks = Component => props => (
  <TasksContext.Consumer>
    {({ tasks, ...methods }) => <Component {...props} tasks={tasks} {...methods} />}
  </TasksContext.Consumer>
);
