import React, { Component } from 'react';
import { Step, Stepper, StepLabel, RaisedButton, FlatButton, Snackbar } from 'material-ui';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
// import TextField from 'material-ui/TextField';
import MatTable from '../MatUI/MatTable'
import TimeSelector from '../MatUI/MatTimeSelector'
import MatInput from '../MatUI/MatInput'
import { connect } from 'react-redux'
import { getAllServices } from '../../ducks/reducer'
import MatDatePicker from '../MatUI/MatDatePicker'
import axios from 'axios'



class MatStepper extends Component {
  constructor() {
    super()

    this.state = {
      loading: false,
      finished: false,
      stepIndex: 0,
      open: false,
      autoHideDuration: 4000,
      message: 'Appointment has been booked.',
      meridies: '',
      time: '',
      date: null,
      servicesChosen: []
  
    };
    this.handleChange = this.handleChange.bind( this )
    this.handleChange2 = this.handleChange2.bind( this )
    this.selectRow = this.selectRow.bind( this )
    this.dateChange = this.dateChange.bind( this )
    this.addAppt = this.addAppt.bind( this )
  }

  componentDidMount() {
    this.props.getAllServices()
  }


  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

  handleClick = ( event ) => {
    // const { stepIndex } = this.state
    event.preventDefault()
    this.addAppt()
    this.setState({
      open: true,
      stepIndex: 0,
      finished: false,
      meridies: '',
      time: '',
      date: '',
      servicesChosen: []
    });
    // onClick={(event) => {
    //   event.preventDefault();
    //   this.setState( {stepIndex: 0, finished: false,  } );
    // }
  };

  handleActionClick = () => {
    this.setState( {
      open: false
    })
    alert('Appointment canceled.')
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  handleChange = ( event, index, meridies ) => this.setState( { meridies } );
  handleChange2 = ( event, index, time ) => this.setState( { time } );
  
  dateChange( e, date ) {
    this.setState( {
      date
    } )
  }

  selectRow( rows ) {
    console.log('parent', rows);
    let selected = []
    rows.map( ( position, i ) => {
      return selected.push( this.props.servicesList[ position ] )
    } )

    this.setState( {
      servicesChosen: selected
    })
    console.log( 'selected', selected );

  }

  addAppt() {
    let appt = { 
      date: this.state.date,
      time: this.state.time,
      service: this.state.servicesChosen
    }

    axios.post( '/api/addAppt', appt ).then( res => {
      console.log('res', res.data )
      axios.post( '/api/send', res.data ).then( response => {
        console.log('response', response.data);
      })
    })
  }

  getStepContent( stepIndex ) {
    switch ( stepIndex ) {
      case 0:
        return (
          <MatTable
          selectRow={ this.selectRow }/>
        );
      case 1:
        return (
          <div>
            <MatDatePicker
            dateChange={ this.dateChange }
            date={ this.state.date }
            hintText='Click Here'
            />
            <TimeSelector 
            meridies={ this.state.meridies }
            time={ this.state.time }
            handleChange={ this.handleChange }
            handleChange2={ this.handleChange2 }/>
            
          </div>
        );
      case 2:
        return (
          <MatInput servicesChosen={ this.state.servicesChosen }
          date={ this.state.date }
          time={ this.state.time }
          value={ this.state.value }          
          />
        );
  
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            {/*<a
            //   href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState( {stepIndex: 0, finished: false, meridies: '', time: '', date: '', servicesChosen: [] } );
              }}
            >
              Reset
            </a>*/}
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Book It!' : 'Next'}
            primary={true}
            onClick={stepIndex === 2 ? this.handleClick : this.handleNext }
            // onClick={(event) => {
            //   event.preventDefault();
            //   this.setState( {stepIndex: 0, finished: false, meridies: '', time: '', date: '', servicesChosen: [] } );
            // }}
          />
          <Snackbar
          open={this.state.open}
          message={this.state.message}
          action='cancel'
          autoHideDuration={this.state.autoHideDuration}
          onActionClick={this.handleActionClick}
          onRequestClose={this.handleRequestClose}
        />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;
    console.log(this.state);
    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper 
        activeStep={stepIndex}
        orientation='vertical'>
          <Step>
            <StepLabel>Choose a Service</StepLabel>
          </Step>
          <Step>
            <StepLabel>Choose a Date and Time</StepLabel>
          </Step>
          <Step>
            <StepLabel>Double Check the Info</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

let outputActions = {
  getAllServices
}

function mapStateToProps( state ) {
  return {
    servicesList: state.servicesList
  }
}

export default connect( mapStateToProps, outputActions )( MatStepper );