import { connect } from 'react-redux';
import Portfolio from './portfolio';
import { deleteSession } from '../../actions/session_actions';

const msp = (state)=>{
  return {
	}
}

const mdp = (dispatch) => {
	return {
		logout: () => dispatch(deleteSession())
	};
};

export default connect(null, mdp)(Portfolio);
