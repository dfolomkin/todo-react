import React from 'react';

import { withTasks } from '../context';
const TaskComponent = ({ id, title, done, deleteTask, changeTaskStatus }) => (
  <div className="form-group">
    <div className="input-group">
      <span className="input-group-btn">
        <button
          className={done ? 'btn btn-success' : 'btn btn-warning'}
          type="button"
          onClick={() => changeTaskStatus(id)}
        >
          {done ? <i className="fa fa-check" /> : <i className="fa fa-minus" />}
        </button>
      </span>
      <input className="form-control" type="text" value={title} disabled />
      <span className="input-group-btn">
        <button className="btn btn-dark" type="button" onClick={() => deleteTask(id)}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    </div>
  </div>
);

export const Task = withTasks(TaskComponent);
