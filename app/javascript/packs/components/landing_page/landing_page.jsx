import React from 'react'
import SignupForm from '../session_form/signup_form_container'

class LandingPage extends React.Component{
  render() {
    return (
      <div className='landing-page-container'>
        <div className='title-and-motto-box'>
          <h1>StockTickr</h1>
          <p>Track and manage your portfolio.</p>
        </div>
        <div className='session-form-box'>
          <SignupForm />
        </div>
      </div>
    )
  }
}

export default LandingPage;