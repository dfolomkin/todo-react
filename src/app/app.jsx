import React from 'react';

import { AddTaskBar, TasksList } from './components';
import { TasksContext, initialTasks } from './context';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTask = title => {
      this.setState((prevState, props) => {
        const tasks = prevState.tasks;

        if (!tasks.map(item => item.title).includes(title)) {
          const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;

          return {
            tasks: [...prevState.tasks, { id, title, done: false }]
          };
        } else {
          return { ...prevState };
        }
      });
    };

    this.deleteTask = id => {
      this.setState((prevState, props) => {
        const tasks = prevState.tasks;
        const index = tasks.findIndex(item => item.id === id);

        return {
          tasks: tasks.slice(0, index).concat(tasks.slice(index + 1))
        };
      });
    };

    this.changeTaskStatus = id => {
      this.setState((prevState, props) => {
        const tasks = prevState.tasks;

        return {
          tasks: tasks.map(item => (item.id === id ? { ...item, done: !item.done } : { ...item }))
        };
      });
    };

    this.state = {
      tasks: initialTasks,
      addTask: this.addTask,
      deleteTask: this.deleteTask,
      changeTaskStatus: this.changeTaskStatus
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <div className="form-group pull-right">powered by magic</div>
            <TasksContext.Provider value={this.state}>
              <AddTaskBar />
              <TasksList />
            </TasksContext.Provider>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>
    );
  }
}

export default App;
