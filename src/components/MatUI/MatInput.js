import React from 'react';
import TextField from 'material-ui/TextField';

export default class MatInput extends React.Component {
  

  handleChange = ( event ) => {
    this.setState( {
      value: event.target.value,
    } );
  };

  render() {
   
    let displayAppt = this.props.servicesChosen.map( ( e, i ) => {
      return (
        <TextField
        value={ `${ e.services } ${ e.price}` }
        // onChange={ this.handleChange }
        disabled={ false }
      />
      )
    })


    return (
      <div>
        { displayAppt }
        <TextField
          id='Day'        
          value={ this.props.date }
          // onChange={ this.handleChange }
          disabled={ false }          
        />

        <TextField
          id='Time'        
          value={ this.props.time }
          // onChange={ this.handleChange }
          disabled={ false }          
        />

      </div>
    );
  }
}