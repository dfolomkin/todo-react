import React from 'react';
import { connect } from 'react-redux';
import { FormGroup } from 'react-bootstrap';

import { Task } from './task';

const TasksListComponent = ({ tasks }) => {
  const todoTasksArr = tasks.filter(obj => !obj.done);
  const doneTasksArr = tasks.filter(obj => obj.done);
  const todoTasks = todoTasksArr.map(obj => <Task key={obj.id} {...obj} />);
  const doneTasks = doneTasksArr.map(obj => <Task key={obj.id} {...obj} />);

  return (
    <div>
      {todoTasks.length > 0 ? <h3>To do!</h3> : null}
      <FormGroup>{todoTasks}</FormGroup>
      {doneTasks.length > 0 ? <h3>Done:</h3> : null}
      <FormGroup>{doneTasks}</FormGroup>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export const TasksList = connect(mapStateToProps)(TasksListComponent);
