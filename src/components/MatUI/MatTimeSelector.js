import React, {Component} from 'react';
import { SelectField, MenuItem } from 'material-ui';

class TimeSelector extends Component {
  state = {
    value: null,
  };

  handleChange = ( event, index, value ) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Morning or Afternoon?"
          value={null}
          onChange={this.handleChange}

        >
          <MenuItem value={null} primaryText="Morning or Afternoon?" />
          <MenuItem value={true} primaryText="Morning" />
          <MenuItem value={true} primaryText="Afternoon" />
        </SelectField>

        <SelectField
          floatingLabelText="Pick a Time"
          value={null}
          onChange={this.handleChange}
          
        >
          <MenuItem value={null} primaryText="Pick a Time" />
          <MenuItem value={true} primaryText="1:00-1:30" />
          <MenuItem value={true} primaryText="2:00-2:30" />
          <MenuItem value={true} primaryText="3:00-3:30" />
          <MenuItem value={true} primaryText="4:00-4:30" />
          <MenuItem value={true} primaryText="5:00-5:30" />
          <MenuItem value={true} primaryText="6:00-6:30" />
          <MenuItem value={true} primaryText="7:00-7:30" />
          <MenuItem value={true} primaryText="8:00-8:30" />
          <MenuItem value={true} primaryText="9:00-9:30" />
          <MenuItem value={true} primaryText="10:00-10:30" />
          <MenuItem value={true} primaryText="11:00-11:30" />
          <MenuItem value={true} primaryText="12:00-12:30" />
        </SelectField>
      </div>
    );
  }
}

export default TimeSelector;