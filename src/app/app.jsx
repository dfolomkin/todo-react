import React from 'react';

import { AddTaskBar, TasksList } from './components';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-2" />
      <div className="col-sm-8">
        <div className="form-group pull-right">powered by redux</div>
        <AddTaskBar />
        <TasksList />
      </div>
      <div className="col-sm-2" />
    </div>
  </div>
);

export default App;
