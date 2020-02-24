import {
	CLEAR_TICKER,
	RECEIVE_TICKER
} from '../actions/ticker_actions';

const _nullTicker = {
	currentUser: null
};

const tickerReducer = (prevState = _nullTicker, action) => {
	Object.freeze(prevState);
	let newState = {};
	switch (action.type) {
		case RECEIVE_TICKER:
			newState = { tickerData: action.tickerData };
			return newState;
		case CLEAR_TICKER:
			return _nullTicker;
		default:
			return prevState;
	}
};

export default tickerReducer;
