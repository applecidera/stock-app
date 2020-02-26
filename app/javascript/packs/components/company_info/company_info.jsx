import React from 'react'
import {numberWithCommas} from '../../utils/number_conversion_utils'

class CompanyInfo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      quantity: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
		return (e) => {
      (e.target.value > 0) ?
			this.setState({
				[type]: e.target.value
      }) : 
      this.setState({
				[type]: 0
			});
		};
	}

  handleSubmit(e){
    e.preventDefault();
    let quantity = this.state.quantity
    (quantity > 0) ?
    console.log('handling it boss') : 
    console.log("can't buy 0 stocks")
  }

  render() {
    if (!this.props.tickerData) return null;

    let tickerData = this.props.tickerData;
    let color = ((tickerData['change'] > 0) ? 'green' : 'red') || 'grey';
    let currentPrice = numberWithCommas(tickerData['latestPrice'].toFixed(2));
    let subTotal = (this.state.quantity > 0) ? numberWithCommas((parseInt(this.state.quantity) * tickerData['latestPrice']).toFixed(2)) : 0.00;
    let percentChange = (tickerData['changePercent'] * 100).toFixed(2);

    let purchaseOption = this.props.purchaseOption ? (
      <form className='purchase-option'>
        <label htmlFor='quantity'>Quantity</label>
        <input id='quantity' type="number" 
          value={this.state.quantity}
          onChange={this.handleInput('quantity')}
          placeholder={0} />
        <span>${subTotal}</span>
        <button onClick={this.handleSubmit}>Buy</button>
      </form>
    ) : null;
    
    return (
      <div className="company-info-container">
        <h4>{tickerData['companyName']}</h4>
        <div>{tickerData['primaryExchange']}: {tickerData['symbol']}</div>
        <div><span>{currentPrice}</span> USD <strong className={color}>{tickerData['change']} ({percentChange}%)</strong></div>
        <div>{tickerData['latestTime']}</div>
        {purchaseOption}
      </div>
    )
  }
}

export default CompanyInfo;