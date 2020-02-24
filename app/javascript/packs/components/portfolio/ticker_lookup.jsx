import React from 'react'
import {lookupTicker} from '../../utils/iex_api_utils'

class TickerLookup extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit() {
    lookupTicker().then((data) => console.log(data));
  };

  render() {
    return (
      <>
        <form className="ticker-lookup-form" onSubmit={this.handleSubmit}>
          <span>Lookup a company</span>
          <input type="text" placeholder="Enter Company Ticker..." />
          <button>Search</button>
        </form>
      </>
    )
  }
}

export default TickerLookup;