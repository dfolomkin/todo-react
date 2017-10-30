import React from 'react';
import ReactDOM from 'react-dom';

import AddTaskBar from './components/add-task-bar.jsx';
import TaskList from './components/task-list.jsx';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2 col-lg-4"></div>
        <div className="col-sm-8 col-lg-4">
          <div className="form-group">
          <h1>To Do App | React</h1>
          </div>
          <AddTaskBar />
          <TaskList />
        </div>
        <div className="col-sm-2 col-lg-4"></div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
