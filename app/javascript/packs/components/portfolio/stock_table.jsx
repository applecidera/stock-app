import React from 'react'
import {numberWithCommas} from '../../utils/number_conversion_utils'

class StockTable extends React.Component{
  constructor(props){
    super(props);
    this.state={
      netWorth: 0
    }
  }
  
  render() {
    let netWorth = numberWithCommas(this.state.netWorth);

    return (
      <div className="stock-table-container">
        <div className="stock-table-title-bar"><span>Portfolio</span><span>Net Worth: ${netWorth}</span></div>
        <div className="stock-container">
          <ul>
            <li className="portfolio-stock-elements" key='top-line'><label>Stock</label><span>Quantity</span><span>Entry Price</span></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default StockTable;