import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../ducks/reducer';



class Admin extends Component {

  componentDidMount() {
    this.props.getUsers()
  }

    render() {
      let displayUsers = this.props.users.map( ( users, i ) => {
        return (
          <div key={ i }>
          <p>{ users.name_first }</p>
          <p>{ users.name_last}</p>
          <p>{ users.email }</p>
          <p>{ users.user_type }</p>
          <img src={ users.img } alt='users profile picture'/>
          </div>
        )
      })
      return (
          <div className="Admin">
            <p>{this.props.rejected}</p>
            { displayUsers }
          </div>
      );
    }
  }

  function mapStateToProps( state ){
    return {
      rejected: state.rejected,
      users: state.users
    }
  }
  
  export default connect(mapStateToProps, { getUsers } )(Admin);