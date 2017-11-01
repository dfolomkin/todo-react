import React from 'react';
import ReactDOM from 'react-dom';

import AddTaskBar from './components/add-task-bar.jsx';
import TaskList from './components/task-list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, title: 'task1', done: false },
        { id: 2, title: 'task2', done: false },
        { id: 3, title: 'task3', done: true }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
  }

  handleAdd(taskTitle) {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, { id: prevState.tasks.length + 1, title: taskTitle, done: false }]
    }));
    console.log('sending task: ', taskTitle);
    console.log('tasks array: ', this.state.tasks);
  }

  handleDelete(e) {
    this.setState({ });
  }

  handleChangeStatus(e) {
    this.setState({ });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="form-group pull-right">
              powered by magic
            </div>
            <AddTaskBar onAdd={this.handleAdd} />
            <TaskList tasks={this.state.tasks} />
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    );
  };
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
