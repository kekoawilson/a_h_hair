import React, { Component } from 'react';
import { Step, Stepper, StepLabel, RaisedButton, FlatButton, DatePicker, Snackbar } from 'material-ui';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
// import TextField from 'material-ui/TextField';
import MatTable from '../MatUI/MatTable'
import TimeSelector from '../MatUI/MatTimeSelector'
import MatInput from '../MatUI/MatInput'


class MatStepper extends Component {

  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
    open: false,
    autoHideDuration: 4000,
    message: 'Appointment has been booked.'
  };

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

  handleClick = () => {
    const { stepIndex } = this.state
    this.setState({
      open: true,
      stepIndex: stepIndex,
      finished: true,
      stepIndex: stepIndex + 1
    });
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

  getStepContent( stepIndex ) {
    switch ( stepIndex ) {
      case 0:
        return (
          <MatTable/>
        );
      case 1:
        return (
          <div>
            <DatePicker
            hintText='Click Here'
            />
            <TimeSelector/>
            
          </div>
        );
      case 2:
        return (
          <MatInput/>
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
            <a
            //   href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Reset
            </a>
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

export default MatStepper;