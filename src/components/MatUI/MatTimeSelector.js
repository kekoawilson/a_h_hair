import React, { Component } from 'react';
import { SelectField, MenuItem } from 'material-ui';

class TimeSelector extends Component {

 

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Morning or Afternoon?"
          value={ this.props.value }
          onChange={ this.props.handleChange }

        >
          <MenuItem value={ null } primaryText="Morning or Afternoon?" disabled={ true }/>
          <MenuItem value={ 1 } primaryText="Morning" />
          <MenuItem value={ 2 } primaryText="Afternoon" />
        </SelectField>

        <SelectField
          floatingLabelText="Pick a Time"
          value={ this.props.time }
          onChange={ this.props.handleChange2 }
          
        >
          <MenuItem value={ null } primaryText="Pick a Time" disabled={ true }/>
          <MenuItem value={ '1:00-1:30' } primaryText='1:00-1:30' />
          <MenuItem value={ '2:00-2:30' } primaryText='2:00-2:30' />
          <MenuItem value={ '3:00-3:30' } primaryText='3:00-3:30' />
          <MenuItem value={ '4:00-4:30' } primaryText='4:00-4:30' />
          <MenuItem value={ '5:00-5:30' } primaryText='5:00-5:30' />
          <MenuItem value={ '6:00-6:30' } primaryText='6:00-6:30' />
          <MenuItem value={ '7:00-7:30' } primaryText='7:00-7:30' />
          <MenuItem value={ '8:00-8:30' } primaryText='8:00-8:30' />
          <MenuItem value={ '9:00-9:30' } primaryText='9:00-9:30' />
          <MenuItem value={ '10:00-10:30' } primaryText='10:00-10:30' />
          <MenuItem value={ '11:00-11:30' } primaryText='11:00-11:30' />
          <MenuItem value={ '12:00-12:30' } primaryText='12:00-12:30' />
        </SelectField>
      </div>
    );
  }
}

export default TimeSelector;