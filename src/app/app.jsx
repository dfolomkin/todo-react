import React from 'react';

import { AddTaskBar, TasksList } from './components';
import { TasksContext, taskStorage } from './context';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-2" />
      <div className="col-sm-8">
        <div className="form-group pull-right">powered by magic</div>
        <TasksContext.Provider value={taskStorage}>
          <AddTaskBar />
          <TasksList />
        </TasksContext.Provider>
      </div>
      <div className="col-sm-2" />
    </div>
  </div>
);

export default App;
