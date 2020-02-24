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
        <div className='porfolio-box'>
          <div className='portfolio-left-side'>
            <h1>Portfolio Goes Here</h1>
          </div>
          <div className='portfolio-right-side'>
            <h1>Buying Stocks Goes Here</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;