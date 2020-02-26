import { connect } from 'react-redux';
import Navbar from './navbar';
import { deleteSession } from '../../actions/session_actions';
import { fetchAllTrades } from '../../actions/trade_actions';

const msp = (state, ownProps)=>{
  return {
	}
}

const mdp = (dispatch) => {
	return {
		logout: () => dispatch(deleteSession()),
		fetchAllTrades: ()=>dispatch(fetchAllTrades())
	};
};

export default connect(msp, mdp)(Navbar);
