import React from 'react'

class CompanyInfo extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    if (!this.props.tickerData) return null;

    let tickerData = this.props.tickerData;
    let keys = Object.keys(tickerData);
    let values = Object.values(tickerData);
    let importantValues = {
      0: true,
      4: true,
      6: true,
      8: true,
      9: true,
      10: true,
      11: true,
      12: true,
      28: true,
      29 :true
    }
    keys[11] = "CurrentStatus";
    keys[29] = "PercentChange";
    values[29] = (values[29] * 100).toFixed(2).toString() + '%';

    let data = (
      <ul className="ticker-info-list">
        {keys.map((key, idx)=>{
          if ( importantValues[idx] && values[idx] ){
            return (
            <li className='ticker-info-elements' key={idx}>
              <label>{keys[idx].charAt(0).toUpperCase() + keys[idx].slice(1)}:</label><span>{values[idx]}</span>
            </li>)
          }
        })}
      </ul>
    )
    
    return (
      <div className="company-info-container">
        <h4>{tickerData['companyName']}</h4>
        {data}
      </div>
    )
  }
}

export default CompanyInfo;