import React from 'react';
import ReactDOM from 'react-dom';

import AddTaskBar from './components/add-task-bar.jsx';
import TaskList from './components/task-list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastId: 3,
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
      lastId: ++prevState.lastId,
      tasks: [...prevState.tasks, { id: ++prevState.lastId, title: taskTitle, done: false }]
    }));
  }

  handleDelete(id) {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(obj => obj.id !== id)
    }));
  }

  handleChangeStatus(id) {
    this.setState(prevState => {
      //is this anough ummutable?
      prevState.tasks.forEach(obj => {
        if (obj.id === id) {
          obj.done = !obj.done;
        }
      });
      return ({
        tasks: prevState.tasks
      });
    });
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
            <TaskList tasks={this.state.tasks} onCheck={this.handleChangeStatus} onDelete={this.handleDelete} />
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
