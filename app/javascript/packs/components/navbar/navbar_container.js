import { connect } from 'react-redux';
import Navbar from './navbar';
import { deleteSession } from '../../actions/session_actions';
import { fetchAllTrades } from '../../actions/trade_actions';
import { fetchUser } from '../../actions/session_actions';

const msp = (state, ownProps)=>{
  return {
		userId: state.session.currentUser.id
	}
}

const mdp = (dispatch) => {
	return {
		logout: () => dispatch(deleteSession()),
		fetchAllTrades: ()=>dispatch(fetchAllTrades()),
		fetchUser: (userId) => dispatch(fetchUser(userId))
	};
};

export default connect(msp, mdp)(Navbar);
