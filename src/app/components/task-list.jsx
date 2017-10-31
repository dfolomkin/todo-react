import React from 'react';

import Task from './task.jsx'

class TaskList extends React.Component {
  render() {
    return (
      <div className="form-group">
        <Task />
        <Task />
        <Task />
      </div>
    );
  };
}

export default TaskList;
