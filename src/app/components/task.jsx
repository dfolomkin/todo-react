import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

import { deleteTask, changeTaskStatus, changeTask } from '../actions';

class TaskComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      title: props.title
    };
  }

  componentDidMount() {
    this.taskInputGroup.addEventListener('dblclick', e => {
      e.preventDefault();
    });
    this.taskInput.addEventListener('dblclick', e => {
      e.preventDefault();
    });
  }

  handleDeleteClick = () => {
    this.props.onDeleteTask(this.props.id);
  };

  handleCheckClick = () => {
    this.props.onChangeTaskStatus(this.props.id);
  };

  handleDoubleClick = () => {
    this.setState({ disabled: false });
  };

  handleChange = () => {
    this.setState({ title: this.taskInput.value });
  };

  handleKeyPress = e => {
    if (e.key == 'Enter') {
      this.props.onChangeTask(this.props.id, this.taskInput.value);
      this.setState({ disabled: true });
    }
  };

  handleBlur = () => {
    this.props.onChangeTask(this.props.id, this.taskInput.value);
    this.setState({ disabled: true });
  };

  render() {
    return (
      <FormGroup>
        <div className="input-group" onDoubleClick={this.handleDoubleClick} ref={node => (this.taskInputGroup = node)}>
          <InputGroup.Button>
            <Button bsStyle={this.props.done ? 'success' : 'warning'} onClick={this.handleCheckClick}>
              <Glyphicon glyph={this.props.done ? 'ok' : 'minus'} />
            </Button>
          </InputGroup.Button>
          <FormControl
            type="text"
            placeholder="Enter a task"
            value={this.state.title}
            disabled={this.state.disabled}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onBlur={this.handleBlur}
            inputRef={node => {
              this.taskInput = node;
            }}
          />
          <InputGroup.Button>
            <Button bsStyle="danger" onClick={this.handleDeleteClick}>
              <Glyphicon glyph="trash" />
            </Button>
          </InputGroup.Button>
        </div>
      </FormGroup>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  onDeleteTask: taskId => {
    dispatch(deleteTask(taskId));
  },
  onChangeTaskStatus: taskId => {
    dispatch(changeTaskStatus(taskId));
  },
  onChangeTask: (taskId, taskTitle) => {
    dispatch(changeTask(taskId, taskTitle));
  }
});

export const Task = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskComponent);
