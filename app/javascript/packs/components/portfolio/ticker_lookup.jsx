import React from 'react'
import {lookupTicker} from '../../utils/iex_api_utils'

class TickerLookup extends React.Component{
  constructor(props){
    super(props);
    this.state={
      queryString: "",
      errors: null
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit() {
    // TODO parse queryString and choose first match
    // lookupTicker(this.state.queryString).then((data) => console.log(data));
    this.props.lookupTicker(this.state.queryString);
    // TODO mdp a dispatch with .then data
}

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