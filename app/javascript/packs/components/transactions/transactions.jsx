import React from 'react'
import Navbar from '../navbar/navbar_container'

class Transactions extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const logout = this.props.logout;

    return (
      <div className="transactions-container">
        <Navbar selected={'transactions'}/>
        <h1>Transactions Goes Here</h1>
      </div>
    )
  }
}

export default Transactions;