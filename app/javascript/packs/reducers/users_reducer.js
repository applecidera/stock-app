import {RECEIVE_USER} from '../actions/session_actions';

const usersReducer = (prevState = {}, action) => {
	
	switch(action.type){
		case RECEIVE_USER:
			return action.user;
		default:
			return prevState;
	}
};

export default usersReducer;
