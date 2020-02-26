import {
	CLEAR_TICKER,
	RECEIVE_TICKER,
	ADD_TICKER
} from '../actions/ticker_actions'

import {merge} from 'lodash'

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
		case ADD_TICKER:
			newState = merge({}, prevState);
			let symbol = action.tickerData['symbol'];
			let latestPrice = action.tickerData['latestPrice'];
			let data = {};
			let color;
			if (action.tickerData['change'] > 0){ color = 'green';} 
			else if (action.tickerData['change'] < 0) { color = 'red';}
			else { color = 'gray';}
			data[symbol] = symbol;
			data['latestPrice'] = latestPrice;
			data['color'] = color;
			newState[symbol] = data;
			return newState;
		case CLEAR_TICKER:
			return _nullTicker;
		default:
			return prevState;
	}
};

export default tickerReducer;
