import React from 'react'
import {numberWithCommas} from '../../utils/number_conversion_utils'

class CompanyInfo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      quantity: 0,
      price: null,
      subTotal: 0,
      errors: null,
      balance: parseFloat(this.props.balance) || 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.props.balance && (parseFloat(this.props.balance) !== this.state.balance)){
      this.setState({ balance: parseFloat(this.props.balance)});
    }
  }

  handleInput(currentPrice) {
		return (e) => {
      (e.target.value > 0) ?
			this.setState({
        quantity: parseInt(e.target.value),
        price: currentPrice,
        subTotal: (parseFloat(e.target.value) * currentPrice),
        errors: null
      }) : 
      this.setState({
        quantity: 0,
        price: null,
        subTotal: 0,
        errors: null
			});
		};
	}

  handleSubmit(e){
    e.preventDefault();
    let quantity = this.state.quantity;
    let balance = this.state.balance;
    let price = this.state.price;
    let subTotal = this.state.subTotal;
    let ticker = this.props.tickerData.symbol;
    let trade = {
      quantity: quantity,
      price: price,
      ticker: ticker,
      userId: this.props.userId
    }
    
    if (balance < subTotal) {
      this.setState({ errors: "Insufficient liquid assets"})
    } else if (quantity > 0) {
      this.props.makeTrade(trade);
      this.props.makePurchase((trade));
    } else {
      this.setState({ errors: "Please enter a quantity of 1 or more"})
    }
  }

  clearErrors(){
    this.setState({ errors: null});
  }

  render() {
    if (!this.props.tickerData) return null;

    let tickerData = this.props.tickerData;
    let color = ((tickerData['change'] > 0) ? 'green' : 'red') || 'grey';
    let rawCurrentPrice = parseFloat(tickerData['latestPrice']);
    let currentPrice = numberWithCommas(tickerData['latestPrice'].toFixed(2));
    let subTotal = (this.state.quantity > 0) ? numberWithCommas((parseFloat(this.state.quantity) * tickerData['latestPrice']).toFixed(2)) : 0.00;
    let percentChange = (tickerData['changePercent'] * 100).toFixed(2);

    let purchaseOption = this.props.purchaseOption ? (
      <form className='purchase-option'>
        <label htmlFor='quantity'>Quantity</label>
        <input id='quantity' type="number" 
          value={this.state.quantity}
          onChange={this.handleInput(rawCurrentPrice)}
          onBlur={()=>this.clearErrors()}
          placeholder={0} />
        <span>${subTotal}</span>
        <button onClick={this.handleSubmit}>Buy</button>
      </form>
    ) : null;

    let errors = this.state.errors ? (
      <div className="company-ticker-errors">
        <h6>{this.state.errors}</h6>
      </div>
    ) : null;
    
    return (
      <div className="company-info-container">
        {errors}
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