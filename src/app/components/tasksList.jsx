import React from 'react';

import { Task } from './task.jsx';
import { withTasks } from '../context';

const TasksListComponent = ({ tasks }) => {
  const todoTasksArr = tasks.filter(item => !item.done);
  const doneTasksArr = tasks.filter(item => item.done);
  const todoTasks = todoTasksArr.map(item => <Task key={item.id} {...item} />);
  const doneTasks = doneTasksArr.map(item => <Task key={item.id} {...item} />);

  return (
    <div>
      {todoTasks.length > 0 ? <h3>To do!</h3> : null}
      <div className="form-group">{todoTasks}</div>
      {doneTasks.length > 0 ? <h3>Done:</h3> : null}
      <div className="form-group">{doneTasks}</div>
    </div>
  );
};

export const TasksList = withTasks(TasksListComponent);
