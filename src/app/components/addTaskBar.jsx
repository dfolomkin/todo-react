import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

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
      <FormGroup>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Enter new task"
            onKeyPress={this.handleKeyPress}
            inputRef={node => {
              this.taskInput = node;
            }}
          />
          <InputGroup.Button>
            <Button bsStyle="success" onClick={this.handleAddClick}>
              <Glyphicon glyph="plus" />
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
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
