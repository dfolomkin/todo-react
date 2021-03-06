import React from 'react';

class AddTaskBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputText: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key == 'Enter') {
      this.props.onAdd(this.state.inputText);
      this.setState({ inputText: '' });
    }
  }

  handleAddClick() {
    this.props.onAdd(this.state.inputText);
    this.setState({ inputText: '' });
  }

  render() {
    return (
      <div className="form-group">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Enter new task" value={this.state.inputText} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          <span className="input-group-btn">
            <button className="btn btn-success" type="button" onClick={this.handleAddClick}><i className="fa fa-plus"></i></button>
          </span>
        </div>
      </div>
    );
  };
}

export default AddTaskBar;
