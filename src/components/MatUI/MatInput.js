import React from 'react';
import TextField from 'material-ui/TextField';

export default class MatInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}