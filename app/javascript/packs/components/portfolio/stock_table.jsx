import React from 'react'
import {numberWithCommas} from '../../utils/number_conversion_utils'

class StockTable extends React.Component{
  constructor(props){
    super(props);
    this.state={
      netWorth: 0,
      transactions: Object.values(this.props.trades) || [],
      stocks: {}
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){

    if (prevState.netWorth !== this.state.netWorth){
      // this.netWorth();
    }
  }
  

  netWorth(netWorth){
    if (this.state.netWorth !== netWorth){
      this.setState({netWorth: netWorth})
    }
  }
  
  render() {
    let netWorth = 0;
    let stockHash = {};

    this.state.transactions.forEach( (trade)=> {
      let price = trade.price;
      let quantity = trade.quantity;

      stockHash[trade.ticker] = (stockHash[trade.ticker]) ?
      stockHash[trade.ticker] + (price*quantity) : 0 + (price*quantity);
      
      netWorth += (price*quantity);
    })


    let transactions = Object.values(this.props.trades);
    
    let trades = (transactions.length) ? (
      <>
        {transactions.map((trade, i) => (
          <li className="portfolio-trade-elements" key={`trade-${i}`}><label>{trade.ticker}</label><span>{trade.quantity}</span><span>${trade.price}</span></li>
        ))}
      </>
    ) : null;

    return (
      <div className="stock-table-container">
        <div className="stock-table-title-bar"><span>Portfolio</span><span>Net Worth: ${numberWithCommas(netWorth.toFixed(2))}</span></div>
        <div className="stock-container">
          <ul>
            <li className="portfolio-stock-elements" key='top-line'><label>Stock</label><span>Quantity</span><span>Entry Price</span></li>
            {trades}
          </ul>
        </div>
      </div>
    )
  }
}

export default StockTable;