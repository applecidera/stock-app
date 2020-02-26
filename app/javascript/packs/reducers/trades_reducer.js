import {
	RECEIVE_TRADE,
	RECEIVE_ALL_TRADES
} from '../actions/trade_actions'

import {merge} from 'lodash'

const tradesReducer = (prevState = {}, action) => {
	Object.freeze(prevState);
	let newState = {};
	switch (action.type) {
		case RECEIVE_ALL_TRADES:
			newState = merge({}, prevState, action.trades);
			return newState;
		case RECEIVE_TRADE:
			newState = merge({}, prevState);
			newState[action.trade.id] = action.trade;
			return newState;
		default:
			return prevState;
	}
};

export default tradesReducer;
