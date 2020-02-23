import React from 'react'
import Navbar from '../navbar/navbar_container'

class Portfolio extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const logout = this.props.logout;

    return (
      <div className="portfolio-container">
        <Navbar selected={'portfolio'}/>
        <h1>Portfolio Goes Here</h1>
      </div>
    )
  }
}

export default Portfolio;