import React from 'react';

class AddTaskBar extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label for="add-input">Enter a task</label>
        <input id="add-input" type="text" className="form-control" placeholder="Task" />
      </div>
    );
  };
}

export default AddTaskBar;
