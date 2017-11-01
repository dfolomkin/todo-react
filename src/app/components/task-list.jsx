import React from 'react';

import Task from './task.jsx'

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('tasks arr in task-list: ', this.props.tasks);
    const todoTasksArr = this.props.tasks.filter(obj => !obj.done);
    const doneTasksArr = this.props.tasks.filter(obj => obj.done);
    console.log('todoArr: ', todoTasksArr);
    console.log('doneArr: ', doneTasksArr);
    const todoTasks = todoTasksArr.map((obj) => (
      <Task key={obj.id} title={obj.title} done={obj.done} />
    ));
    const doneTasks = doneTasksArr.map((obj) => (
      <Task key={obj.id} title={obj.title} done={obj.done} />
    ));

    return (
      <div>
        <h3>To do!</h3>
        <div className="form-group">
          {todoTasks}
        </div>
        <h3>Done:</h3>
        <div className="form-group">
          {doneTasks}
        </div>
      </div>
    );
  };
}

export default TaskList;
