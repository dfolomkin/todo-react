import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div className="form-group">
        <div className="input-group">
          <span class="input-group-addon">
            <input type="checkbox" />
          </span>
          <input type="text" className="form-control" placeholder="Enter a task" />
          <span className="input-group-btn">
            <button className="btn btn-success" type="button">Add</button>
          </span>
        </div>
      </div>
    );
  };
}

export default Task;
