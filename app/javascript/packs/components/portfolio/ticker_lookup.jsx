import React from 'react'

class TickerLookup extends React.Component{
  constructor(props){
    super(props);
    this.state={
      queryString: ""
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit() {
    if (this.state.queryString === ''){
      this.state.errors = "Please Enter a Company's Ticker Symbol";
    } else {
      this.props.lookupTicker(this.state.queryString);
      this.props.watchTicker(this.state.queryString);
    }
    // TODO parse queryString and choose first match
  }

  updateQuery(event){
    this.setState({
      queryString: event.currentTarget.value
    });
  }

  render() {
    return (
      <>
        <form className="ticker-lookup-form" onSubmit={this.handleSubmit}>
          <span>Lookup a company</span>
          <input type="text" 
            placeholder="Enter Company Ticker..." 
            ref={(el) => this.input = el}
            onChange={this.updateQuery} 
          />
          <button>Search</button>
        </form>
      </>
    )
  }
}

export default TickerLookup;