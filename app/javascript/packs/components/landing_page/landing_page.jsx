import React from 'react'
import SignupForm from '../session_form/signup_form_container'
import LoginForm from '../session_form/login_form_container'

class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      form: null
    }
    this.goBack = this.goBack.bind(this);
  }

  goBack = () => {
    this.setState({form: null})
  }


  render() {

    let getStarted = (
      <div className='get-started'>
        <p>some type of text goes here that explains what the application is supposed to do</p>
        <h3>Join Today</h3>
        <button onClick={()=>this.setState({form: 'signup'})}>Sign Up</button>
        <button onClick={()=>this.setState({form: 'login'})}>Login</button>
      </div>
    )
    
    let form;
    switch (this.state.form) {
      case 'login':
        form = <LoginForm goBack={this.goBack} />;
        break;
      case 'signup':
        form = <SignupForm goBack={this.goBack} />;
        break;
      default:
        form = getStarted;
        break;
    }

    return (
      <div className='landing-page-container'>
        <div className='title-and-motto-box'>
          <div className='logo'></div>
          <h4>Track and manage your portfolio.</h4>
        </div>
        <div className='session-form-box'>
          {form}
        </div>
      </div>
    )
  }
}

export default LandingPage;