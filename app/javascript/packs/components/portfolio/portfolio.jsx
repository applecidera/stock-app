import React from 'react'
import Navbar from '../navbar/navbar_container'
import TickerLookup from './ticker_lookup_container'
import CompanyInfo from '../company_info/company_info_container'
import StockTable from './stock_table_container'
import {numberWithCommas} from '../../utils/number_conversion_utils'

class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.state={
      liquid_assets: parseFloat(this.props.balance) || 0
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.props.balance && (parseFloat(this.props.balance) !== this.state.liquid_assets)){
      this.setState({ liquid_assets: parseFloat(this.props.balance)});
    }
  }

  render() {
    let {logout} = this.props;
    
    return (
      <div className="portfolio-container">
        <Navbar selected={'portfolio'}/>
        <div className='porfolio-box'>
          <div className='portfolio-left-side'>
            <StockTable />
          </div>
          <div className='portfolio-right-side'>
            <h3>Liquid Assets (Cash): ${numberWithCommas(this.state.liquid_assets)}</h3>
            <TickerLookup />
            <CompanyInfo  purchaseOption={true}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;