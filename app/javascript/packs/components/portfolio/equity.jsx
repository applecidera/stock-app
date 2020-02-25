import React from 'react'
import {numberWithCommas} from '../../utils/number_conversion_utils'

class Equity extends React.Component{
  constructor(props){
    super(props);
    this.state={
      netWorth: 0
    }
  }
  
  render() {
    let netWorth = numberWithCommas(this.state.netWorth);

    return (
      <div className="equity-container">
        <div className="networth"><span>Portfolio</span><span>Net Worth: ${netWorth}</span></div>
        <div className="stock-container">
          <ul>
            <li className="portfolio-stock-elements" key='top-line'><label>Stock</label><span>Quantity</span></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Equity;