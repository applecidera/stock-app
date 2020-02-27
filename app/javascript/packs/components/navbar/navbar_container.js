import { connect } from 'react-redux';
import Navbar from './navbar';
import { deleteSession } from '../../actions/session_actions';
import { fetchAllTrades } from '../../actions/trade_actions';
import { fetchUser } from '../../actions/session_actions';
import { watchTicker, watchAllTickers } from '../../actions/ticker_actions'

const msp = (state, ownProps)=>{
  return {
		userId: state.session.currentUser.id,
		trades: Object.values(state.entities.trades),
		watched: state.entities.ticker
	}
}

const mdp = (dispatch) => {
	return {
		logout: () => dispatch(deleteSession()),
		fetchUser: (userId) => dispatch(fetchUser(userId)),
		fetchAllTrades: ()=> dispatch(fetchAllTrades()),
		watchTicker: (ticker) => dispatch(watchTicker(ticker)),
		watchAllTickers: (tickers) => dispatch(watchAllTickers(tickers))
	};
};

export default connect(msp, mdp)(Navbar);
