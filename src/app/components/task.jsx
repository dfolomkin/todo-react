import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-default" type="button"><i className="fa fa-minus" aria-hidden="true"></i></button>
          </span>
          <input type="text" className="form-control" disabled placeholder="Enter a task" />
          <span className="input-group-btn">
            <button className="btn btn-danger" type="button"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
          </span>
        </div>
      </div>
    );
  };
}

export default Task;
