import { connect } from 'react-redux';
import CompanyInfo from './company_info';

const msp = (state)=>{
  return {
		tickerData: state.entities.ticker.tickerData,
		balance: state.session.currentUser.balance
	}
}

const mdp = (dispatch) => {
	return {
	};
};

export default connect(msp, null)(CompanyInfo);
