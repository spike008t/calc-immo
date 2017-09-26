
import React, { Component } from 'react';

class InputField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) === false && value > 0) {
      this.props.onChange(value);
    }
  }

  render() {

    const keyName = this.props.name + "Input";
    let addon = null;
    if (this.props.addon) {
      addon = <span className="input-group-addon">{this.props.addon}</span>;
    }
    let help = null;
    if (this.props.help) {
      help = <small id={this.props.name + "Help"} className="form-text text-muted">{this.props.help}</small>;
    }

    const readOnly = this.props.readOnly === true || false;

    return (
      <div className="form-group">
        <label htmlFor={keyName}>{this.props.title}</label>
        <div className="input-group">
          <input 
            id={keyName}
            className="form-control"
            value={this.state.value}
            type={this.props.type || 'text'}
            step={this.props.step || 'any'}
            onBlur={this.handleChange}
            readonly={readOnly}
          />
          {addon}
        </div>
        {help}
      </div>
    );
  }
}

InputField.defaultProps = {
  onChange: function() {}
}

export default InputField;