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
    if (this.netWorth() !== this.state.netWorth){
      debugger;
      this.setState({netWorth: this.netWorth()})
    }
  }

  netWorth(){
    let netWorth = 0;
    // let stockHash = {};
    // let quantityHash = {};

    this.state.transactions.forEach( (trade)=> {
      let price = trade.price;
      let quantity = trade.quantity;

      // stockHash[trade.ticker] = (stockHash[trade.ticker]) ?
      // stockHash[trade.ticker] + (price*quantity) : 0 + (price*quantity);

      // quantityHash[trade.ticker] = (quantityHash[trade.ticker]) ?
      // quantityHash[trade.ticker] + (quantity) : 0 + (quantity);
      
      netWorth += (price*quantity);
    })

    return netWorth;
  }
  
  render() {
    let netWorth = this.state.netWorth;
    let stockHash = {};
    let quantityHash = {};

    this.state.transactions.forEach( (trade)=> {
      let price = trade.price;
      let quantity = trade.quantity;

      stockHash[trade.ticker] = (stockHash[trade.ticker]) ?
      stockHash[trade.ticker] + (price*quantity) : 0 + (price*quantity);

      quantityHash[trade.ticker] = (quantityHash[trade.ticker]) ?
      quantityHash[trade.ticker] + (quantity) : 0 + (quantity);
      
      // netWorth += (price*quantity);
    })


    let transactions = Object.keys(stockHash);
    
    let trades = (transactions.length) ? (
      <>
        {transactions.map((ticker, i) => (
          <li className="portfolio-trade-elements" key={`trade-${i}`}><label>{ticker}</label><span>{quantityHash[ticker]}</span><span>${numberWithCommas(stockHash[ticker].toFixed(2))}</span></li>
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