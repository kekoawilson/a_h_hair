import React, { Component } from 'react';
import 'reset-css'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12
}

class Profile extends Component {
  render() {
    return (
      <div className='Profile'>
        <section className='profile-box'>
          <div className='prof-img'>
          <p>jlakds</p>
          </div>
          <div className='prof-info'>
          jsak
          </div>
          <div className='update-btn'>
            <RaisedButton
            label='Update'
            style={ style }
             />
          </div>
          <div className='cancel-btn'>
            <RaisedButton
            label='Cancel'
            style={ style }
            
             />
          </div>
        </section>

      </div>
    );
  }
}

export default Profile;