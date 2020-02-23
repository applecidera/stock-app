import React from 'react'
import { AuthRoute, ProtectedRoute } from '../utils/rout_utils';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import { deleteSession } from '../actions/session_actions';
import Dashboard from './dashboard/dashboard_container';

class App extends React.Component{
  render() {
    const logout = ()=> deleteSession();
    return (
      <>
       <Switch>
         <ProtectedRoute path="/dashboard" component={Dashboard} />
         <AuthRoute path="/" component={LandingPage} />
       </Switch>
      </>
    )
  }
}

export default App;