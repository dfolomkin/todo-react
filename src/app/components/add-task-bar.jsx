import React from 'react';

class AddTaskBar extends React.Component {
  render() {
    return (
      <div className="form-group">
        {/* <label htmlFor="add-input">Enter a task</label> */}
        <div className="input-group">
          <input id="add-input" type="text" className="form-control" placeholder="Enter a task" />
          <span className="input-group-btn">
            <button className="btn btn-success" type="button">Add</button>
          </span>
        </div>
      </div>
    );
  };
}

export default AddTaskBar;
