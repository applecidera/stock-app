import React from 'react'

class TickerLookup extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit() {
    console.log('handling it');
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