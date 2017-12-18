import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import MatStepper from '../MatUI/MatStepper';
import SnackBar from 'material-ui/Snackbar'

const dateStyle = {
    margin: 'auto'
}

class Booking extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (!nextProps.userData.id) {
            this.setState({
                open: true
            })
        }
    }

    disableWeekends(date) {
        return date.getDay() === 0
    }

    // function disableHolidays( date ) {
    //     return date.getDay() 
    // }

    checkLogin() {

    }

    render() {
        return (
            <div style={dateStyle} >

                <MatStepper />
                <SnackBar
                    open={this.state.open}
                    message='You Must Login To Book An Appointment'
                    autoHideDuration={6000} />
            </div>
        )
    }
}

let outputActions = {
    getUser
}

function mapStateToProps(state) {
    return { userData: state.userData }
}

export default connect(mapStateToProps, outputActions)(Booking);