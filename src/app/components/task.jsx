import React from 'react';

import { withTasks } from '../context';

export class TaskComponent extends React.Component {
  // прям сразу вызывать

  handleDeleteClick = () => {
    this.props.deleteTask(this.props.id);
  };

  handleCheckClick = () => {
    this.props.changeTaskStatus(this.props.id);
  };

  render() {
    const icon = this.props.done ? <i className="fa fa-check" /> : <i className="fa fa-minus" />;
    console.log(this.props);

    return (
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-btn">
            <button
              className={this.props.done ? 'btn btn-success' : 'btn btn-warning'}
              type="button"
              onClick={this.handleCheckClick}
            >
              {icon}
            </button>
          </span>
          <input className="form-control" type="text" value={this.props.title} disabled />
          <span className="input-group-btn">
            <button className="btn btn-dark" type="button" onClick={this.handleDeleteClick}>
              <i className="fa fa-trash-o" />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export const Task = withTasks(TaskComponent);
