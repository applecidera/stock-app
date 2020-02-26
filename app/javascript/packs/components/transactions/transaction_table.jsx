import React from 'react'

class TransactionTable extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="transaction-table-container">
        <div className="transactions-title-bar"><span>Transaction History</span></div>
        <div className="transaction-elements-container">
          <ul>
            <li className="transaction-elements" key='top-line'><label>Stock</label><span>Quantity</span><span>Entry Price</span></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TransactionTable;