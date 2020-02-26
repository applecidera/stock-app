import React from 'react'
import Navbar from '../navbar/navbar_container'
import TransactionTable from './transaction_table_container'
import CompanyInfo from '../company_info/company_info_container'

class Transactions extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const logout = this.props.logout;

    return (
      <div className="transaction-container">
        <Navbar selected={'transactions'}/>
        <div className='transaction-box'>
          <div className='transaction-left-side'>
            <TransactionTable />
          </div>
          <div className='transaction-right-side'>
            <CompanyInfo purchaseOption={false} />
          </div>
        </div>
      </div>
    )
  }
}

export default Transactions;