import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, getAppts } from '../../ducks/reducer';
import MatTableAdmin from './MatTableAdmin';



class Admin extends Component {

  componentDidMount() {
    this.props.getUsers()
    this.props.getAppts()
  }
  
  render() {
    let displayUsers = this.props.users && this.props.users.map( ( users, i ) => {
      return (
        <div key={ i }>
        <p>{ users.name_first }</p>
        <p>{ users.name_last}</p>
        <p>{ users.email }</p>
        <p>{ users.user_type }</p>
        <img src={ users.img } className='users-prof-pic' alt='users profile'/>
        </div>
      )
    })

    // let displayAppts = this.props.appointments && this.props.appointments.map( ( e, i ) => {
    //   return (
    //     <div key={ i }>
    //     <p>{e.appt_date}</p>
    //     <p>{e.appt_time}</p>
    //     <p>{e.appt_service}</p>
    //     <p>{e.user_email}</p>
    //     <p>{e.user_name}</p>
    //     </div>
    //   )
    // })
      return (
          <div className="Admin">
            <h2>{ this.props.loginMessage }</h2>
            { displayUsers }
            <MatTableAdmin/>
          </div>
      );
    }
  }

  let outputActions = {
    getUsers, getAppts
  }

  function mapStateToProps( state ){
    return {
      loginMessage: state.loginMessage,
      users: state.users,
      appointments: state.appointments
    }
  }
  
  export default connect( mapStateToProps, outputActions )(Admin);