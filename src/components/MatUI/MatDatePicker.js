import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
let moment = require('moment')

class MatDatePicker extends Component {
    
    render() {
        let formatDate = date => moment( date ).format("MMM Do YY")
        return (
            <div>
                <DatePicker 
                onChange={ this.props.dateChange } 
                value ={ this.props.date } 
                hintText="Choose Date Here"
                formatDate={ formatDate }
                />
            </div>
        )
    }
}

export default MatDatePicker