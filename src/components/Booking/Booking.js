import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';


class Booking extends Component {

    disableWeekends( date ) {
        return date.getDay() === 0
      }
    
    // function disableHolidays( date ) {
    //     return date.getDay() 
    // }
      
    render() {
        return (
            <div className='Booking'>
                <h2>Date:</h2>
                <DatePicker
                    hintText='Choose a date' shouldDisableDate={ this.disableWeekends }
                     />
            </div>
        )
    }
}

export default Booking;