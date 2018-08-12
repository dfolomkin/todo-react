import React from 'react';

import { Task } from './task.jsx';
import { withTasks } from '../context';

const TasksListComponent = ({ tasks }) => {
  const todoTasksArr = tasks.filter(obj => !obj.done);
  const doneTasksArr = tasks.filter(obj => obj.done);
  const todoTasks = todoTasksArr.map(obj => <Task key={obj.id} {...obj} />);
  const doneTasks = doneTasksArr.map(obj => <Task key={obj.id} {...obj} />);

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
