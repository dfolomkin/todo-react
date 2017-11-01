import React from 'react';

import Task from './task.jsx'

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCheck(id) {
    this.props.onCheck(id);
  }

  handleDelete(id) {
    this.props.onDelete(id);
  }

  render() {
    const todoTasksArr = this.props.tasks.filter(obj => !obj.done);
    const doneTasksArr = this.props.tasks.filter(obj => obj.done);
    const todoTasks = todoTasksArr.map((obj) => (
      <Task key={obj.id} id={obj.id} title={obj.title} done={obj.done} onCheck={this.handleCheck} onDelete={this.handleDelete} />
    ));
    const doneTasks = doneTasksArr.map((obj) => (
      <Task key={obj.id} id={obj.id} title={obj.title} done={obj.done} onCheck={this.handleCheck} onDelete={this.handleDelete} />
    ));

    return (
      <div>
        {(todoTasks.length > 0) ? <h3>To do!</h3> : null}
        <div className="form-group">
          {todoTasks}
        </div>
        {(doneTasks.length > 0) ? <h3>Done:</h3> : null}
        <div className="form-group">
          {doneTasks}
        </div>
      </div>
    );
  };
}

export default TaskList;
