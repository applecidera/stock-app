import { connect } from 'react-redux';
import Portfolio from './portfolio';
import { deleteSession } from '../../actions/session_actions';

const msp = (state)=>{
  return {
		currentUser: state.session.currentUser,
		balance: state.session.currentUser.balance
	}
}

const mdp = (dispatch) => {
	return {
		logout: () => dispatch(deleteSession())
	};
};

export default connect(msp, mdp)(Portfolio);
