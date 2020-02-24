import React from 'react'
import Navbar from '../navbar/navbar_container'
import TickerLookup from './ticker_lookup_container'
import CompanyInfo from './company_info_container'
import {numberWithCommas} from '../../utils/number_conversion_utils'

class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.state={
      liquid_assets: 5000
    }
  }

  render() {
    let {logout} = this.props;

    return (
      <div className="portfolio-container">
        <Navbar selected={'portfolio'}/>
        <div className='porfolio-box'>
          <div className='portfolio-left-side'>
            <h1>Portfolio Goes Here</h1>
          </div>
          <div className='portfolio-right-side'>
            <h3>Liquid Assets (Cash): ${numberWithCommas(this.state.liquid_assets)}</h3>
            <TickerLookup />
            <CompanyInfo />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;