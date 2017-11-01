import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleCheckClick() {
    this.props.onCheck(this.props.id);
  }

  handleDeleteClick() {
    this.props.onDelete(this.props.id);
  }

  render() {
    const icon = this.props.done ? <i className="fa fa-check"></i> : <i className="fa fa-minus"></i>;

    return (
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-btn">
            <button className={this.props.done ? "btn btn-success" : "btn btn-warning"} type="button" onClick={this.handleCheckClick}>{icon}</button>
          </span>
          <input className="form-control" type="text" value={this.props.title} disabled placeholder="Enter a task" />
          <span className="input-group-btn">
            <button className="btn btn-dark" type="button" onClick={this.handleDeleteClick}><i className="fa fa-trash-o"></i></button>
          </span>
        </div>
      </div>
    );
  };
}

export default Task;
