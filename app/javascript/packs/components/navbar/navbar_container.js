import { connect } from 'react-redux';
import Navbar from './navbar';
import { deleteSession } from '../../actions/session_actions';

const msp = (state, ownProps)=>{
  return {
	}
}

const mdp = (dispatch) => {
	return {
		logout: () => dispatch(deleteSession())
	};
};

export default connect(msp, mdp)(Navbar);
