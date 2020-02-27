import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state=({
      trades: this.props.trades || []
    })
  }

  componentDidMount(){
    this.props.fetchUser(this.props.userId);
    this.props.fetchAllTrades(this.props.userId)
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.props.trades.length !== this.state.trades.length){
      this.setState({ trades: this.props.trades});
      let tickers = {};
      this.props.trades.forEach( (trade) => {
        let ticker = trade.ticker.toLowerCase();
        tickers[ticker] = true;
      })
      
      // TODO change to batch request
      // this.props.watchAllTickers(Object.keys(tickers).join(','));
      Object.keys(tickers).forEach( (ticker) => {
        if (!this.props.watched[ticker]){
          this.props.watchTicker(ticker);
        }
      })
    }
  }

  render() {
    let {selected} = this.props;
    let highlighted = (selected === 'portfolio') ? 'toggle-box-background left' : 'toggle-box-background right';
    let toggle = (
    <div className="toggle-box">
      <div className='toggle-container'>
        <div className={highlighted} />
        <Link to="/portfolio"><button className="toggle-button">Portfolio</button></Link>
        <Link to="/transactions"><button className="toggle-button">Transactions</button></Link>
      </div>
    </div>
    );

    return (
      <div className="navbar-container">
        <div className="logo-box">
          <div className='navbar-logo' />
        </div>
        {toggle}
        <div className="logout-box">
          <button className="logout-button" onClick={()=>this.props.logout()}>Logout</button>
        </div>
      </div>
    )
  }
}

export default Navbar;