import React, { Component } from 'react';
import MatStepper from '../MatUI/MatStepper';

const dateStyle = {
 margin: 'auto'
}

class Booking extends Component {

    disableWeekends( date ) {
        return date.getDay() === 0
    }

    // function disableHolidays( date ) {
    //     return date.getDay() 
    // }


    render() {
        return (
            <div style={ dateStyle } >
                
                    <MatStepper />
               
            </div>
        )
    }
}

export default Booking;