import React, { createContext } from 'react';

let tasks = [
  { id: 0, title: 'Task0', done: false },
  { id: 1, title: 'Task1', done: false },
  { id: 2, title: 'Task2', done: false }
];

export const taskStorage = {
  tasks: tasks,
  addTask: title => {
    console.log('adding');
    if (!tasks.map(item => item.title).includes(title)) {
      const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;

      tasks = [...tasks, { id, title, done: false }];
    }
  },
  deleteTask: id => {
    const index = tasks.findIndex(item => item.id === id);

    tasks = tasks.slice(0, index).concat(tasks.slice(index + 1));
  },
  changeTaskStatus: id => {
    tasks = tasks.map(item => (item.id === id ? { ...item, done: !item.done } : { ...item }));
  }
};

export const TasksContext = createContext(taskStorage);

export const withTasks = Component => props => (
  <TasksContext.Consumer>
    {({ tasks, ...methods }) => <Component {...props} tasks={tasks} {...methods} />}
  </TasksContext.Consumer>
);
