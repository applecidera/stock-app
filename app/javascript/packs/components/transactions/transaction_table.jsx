import React from 'react'

class TransactionTable extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    let transactions = Object.values(this.props.trades);
    
    let trades = (transactions.length) ? (
      <>
        {transactions.map((trade, i) => (
          <li className="transaction-trade-elements" key={`trade-${i}`}><label>{trade.ticker}</label><span>{trade.quantity}</span><span>${trade.price}</span></li>
        ))}
      </>
    ) : null;

    return (
      <div className="transaction-table-container">
        <div className="transactions-title-bar"><span>Transaction History</span></div>
        <div className="transaction-elements-container">
          <ul>
            <li className="transaction-elements" key='top-line'><label>Stock</label><span>Quantity</span><span>Entry Price</span></li>
            {trades}
          </ul>
        </div>
      </div>
    )
  }
}

export default TransactionTable;