import React from 'react'

class Navbar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let {selected} = this.props;
    let highlighted = (selected === 'portfolio') ? 'toggle-box-background left' : 'toggle-box-background right';
    let toggle = (
    <div className="toggle-box">
      <div className='toggle-container'>
        <div className={highlighted} />
        <button className="toggle-button">Portfolio</button>
        <button className="toggle-button">Transactions</button>
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