import React, {Component} from 'react';
import { SelectField, MenuItem } from 'material-ui';

class TimeSelector extends Component {
  state = {
    value: '',
    value2: ''
  };

  handleChange = ( event, index, value ) => this.setState( { value } );
  handleChange2 = ( event, index, value2 ) => this.setState( { value2 } );

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Morning or Afternoon?"
          value={this.state.value}
          onChange={this.handleChange}

        >
          <MenuItem value={ null } primaryText="Morning or Afternoon?" disabled={ true }/>
          <MenuItem value={1} primaryText="Morning" />
          <MenuItem value={2} primaryText="Afternoon" />
        </SelectField>

        <SelectField
          floatingLabelText="Pick a Time"
          value={this.state.value2}
          onChange={this.handleChange2}
          
        >
          <MenuItem value={ null } primaryText="Pick a Time" disabled={ true }/>
          <MenuItem value={1} primaryText="1:00-1:30" />
          <MenuItem value={2} primaryText="2:00-2:30" />
          <MenuItem value={3} primaryText="3:00-3:30" />
          <MenuItem value={4} primaryText="4:00-4:30" />
          <MenuItem value={5} primaryText="5:00-5:30" />
          <MenuItem value={6} primaryText="6:00-6:30" />
          <MenuItem value={7} primaryText="7:00-7:30" />
          <MenuItem value={8} primaryText="8:00-8:30" />
          <MenuItem value={9} primaryText="9:00-9:30" />
          <MenuItem value={10} primaryText="10:00-10:30" />
          <MenuItem value={11} primaryText="11:00-11:30" />
          <MenuItem value={12} primaryText="12:00-12:30" />
        </SelectField>
      </div>
    );
  }
}

export default TimeSelector;