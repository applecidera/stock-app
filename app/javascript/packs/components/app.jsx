import React from 'react'
// import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import { deleteSession } from '../actions/session_actions';

class App extends React.Component{
  render() {
    return (
      // <Switch>
      //   <ProtectedRoute path="/" component={LandingPage} />
      //   <AuthRoute path="/" component={LandingPage} />
      // </Switch>
      <>
        <LandingPage />
        <button onClick={()=>deleteSession()}>Logout</button>
      </>
    )
  }
}

export default App;