import React from 'react';

import { withTasks } from '../context';

export class AddTaskBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  handleInputChange = e => {
    this.setState({ inputText: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key == 'Enter' && this.state.inputText !== '') {
      this.props.addTask(this.state.inputText);
      this.setState({ inputText: '' });
    }
  };

  handleAddClick = () => {
    if (this.state.inputText !== '') {
      this.props.addTask(this.state.inputText);
      this.setState({ inputText: '' });
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
            value={this.state.inputText}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
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

export const AddTaskBar = withTasks(AddTaskBarComponent);
