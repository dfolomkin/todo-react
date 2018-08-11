import React from 'react';
import { connect } from 'react-redux';

import { addTask } from '../actions';

class AddTaskBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyPress = e => {
    if (e.key == 'Enter' && this.taskInput.value !== '') {
      this.props.onAddTask(this.taskInput.value);
      this.taskInput.value = '';
    }
  };

  handleAddClick = () => {
    if (this.taskInput.value !== '') {
      this.props.onAddTask(this.taskInput.value);
      this.taskInput.value = '';
    }
  };

  render() {
    return (
      <div className="form-group">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter new task"
            onKeyPress={this.handleKeyPress}
            ref={node => {
              this.taskInput = node;
            }}
          />
          <span className="input-group-btn">
            <button className="btn btn-success" type="button" onClick={this.handleAddClick}>
              <i className="fa fa-plus" />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  onAddTask: taskTitle => {
    dispatch(addTask(taskTitle));
  }
});

export const AddTaskBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskBarComponent);
