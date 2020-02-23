import React from 'react'

class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const logout = this.props.logout;

    return (
      <div>
        <h1>Dashboard Goes Here</h1>
        <button onClick={()=>logout()}>Logout</button>
      </div>
    )
  }
}

export default Dashboard;