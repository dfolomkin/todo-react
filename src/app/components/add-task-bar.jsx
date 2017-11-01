import React from 'react';

class AddTaskBar extends React.Component {
  render() {
    return (
      <div className="form-group">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Enter new task" />
          <span className="input-group-btn">
            <button className="btn btn-success" type="button"><i className="fa fa-plus" aria-hidden="true"></i></button>
          </span>
        </div>
      </div>
    );
  };
}

export default AddTaskBar;
