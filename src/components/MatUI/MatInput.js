import React from 'react';
import TextField from 'material-ui/TextField';

export default class MatInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      service: [],
      day: '',
      meridies: 'am',
      time: '10:00'
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
          id='Service'
          value={this.state.service}
          onChange={this.handleChange}
        />

        <TextField
          id='Day'        
          value={this.state.day}
          onChange={this.handleChange}
        />

        <TextField
          id='AM/PM'
          value={this.state.meridies}
          onChange={this.handleChange}
        />

        <TextField
          id='Time'
          value={this.state.time}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}