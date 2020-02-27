import { connect } from 'react-redux'
import CompanyInfo from './company_info'
import {makeTrade} from '../../actions/trade_actions'
import {makePurchase} from '../../actions/session_actions'

const msp = (state)=>{
  return {
		tickerData: state.entities.ticker.tickerData,
		balance: state.entities.user.balance,
		userId: state.session.currentUser.id
	}
}

const mdp = (dispatch) => {
	return {
		makeTrade: (trade) => dispatch(makeTrade(trade)),
		makePurchase: (trade) => dispatch(makePurchase(trade)),
	};
};

export default connect(msp, mdp)(CompanyInfo);
