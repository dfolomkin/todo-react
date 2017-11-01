import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const icon = this.props.done ? <i className="fa fa-check"></i> : <i className="fa fa-minus"></i>;

    return (
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-btn">
            <button className={this.props.done ? "btn btn-success" : "btn btn-warning"} type="button">{icon}</button>
          </span>
          <input className="form-control" type="text" value={this.props.title} disabled placeholder="Enter a task" />
          <span className="input-group-btn">
            <button className="btn btn-dark" type="button"><i className="fa fa-trash-o"></i></button>
          </span>
        </div>
      </div>
    );
  };
}

export default Task;
