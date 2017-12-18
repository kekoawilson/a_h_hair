import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup, Table} from 'material-ui';
import { getAllServices } from '../../ducks/reducer';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite'
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'

const styles = {
  "palette": {
    "primary1Color": "#ec407a",
  },
  radioButton: {
    marginTop: 16,
  },
  "raisedButton": {
      color: '#ec407a',
      primaryColor: '#ec407a !important',
  }
};

class MatDialog extends Component {
  constructor() {
      super()

      this.state = {
      open: false,
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
      this.props.getAllServices()
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    
    const displayServices = this.props.servicesList.map( ( e, i ) => {
        return (
            <RadioButton
                key={ i }
                value={`value${i +1}`}
                label={e.services}
                disabled={true}
                // checkedIcon={<ActionFavorite/>}
                // uncheckedIcon={<ActionFavoriteBorder />}
                style={styles.radioButton}
              />
        )
    })

    return (
      <div>
        <RaisedButton label="List of Services" onClick={this.handleOpen} style={styles}/>
        <Dialog
          title="Services Offered"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          style={styles}
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {displayServices}
          </RadioButtonGroup>
        </Dialog>
      </div>
    );
  }
}

let outputActions = {
    getAllServices
}

function mapStateToProps( state ) {
    return { servicesList: state.servicesList }
}

export default connect( mapStateToProps, outputActions )( MatDialog )