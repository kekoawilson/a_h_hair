import React from 'react';
import TextField from 'material-ui/TextField';

export default class MatInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      service: [],
      day: '',
      meridies: '',
      time: ''
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
          value={this.props.service}
          onChange={this.handleChange}
        />

        <TextField
          id='Day'        
          value={this.state.day}
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