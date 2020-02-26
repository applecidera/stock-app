import { connect } from 'react-redux'
import CompanyInfo from './company_info'
import {makeTrade} from '../../actions/trade_actions'

const msp = (state)=>{
  return {
		tickerData: state.entities.ticker.tickerData,
		balance: state.session.currentUser.balance
	}
}

const mdp = (dispatch) => {
	return {
		makeTrade: (trade) => dispatch(makeTrade(trade))
	};
};

export default connect(msp, mdp)(CompanyInfo);
