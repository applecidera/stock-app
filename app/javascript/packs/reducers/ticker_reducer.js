import {
	CLEAR_TICKER,
	RECEIVE_TICKER,
	ADD_TICKER,
	ADD_ALL_TICKERS
} from '../actions/ticker_actions'

import {merge} from 'lodash'

const tickerReducer = (prevState = {}, action) => {
	Object.freeze(prevState);
	let newState = {};
	let symbol;
	let latestPrice;
	let change;
	let percentChange;
	let data = {};
	let color;
	switch (action.type) {
		case RECEIVE_TICKER:
			newState = merge({}, prevState);
			newState['tickerData'] = action.tickerData;
			return newState;
		case ADD_TICKER:
			newState = merge({}, prevState);
			symbol = action.tickerData['symbol'];
			latestPrice = action.tickerData['latestPrice'];
			change = change = action.tickerData['change'];
			percentChange = parseFloat((action.tickerData['changePercent'] * 100).toFixed(2));
			if (action.tickerData['change'] > 0){ color = 'green';} 
			else if (action.tickerData['change'] < 0) { color = 'red';}
			else { color = 'gray';}

			data['ticker'] = symbol;
			data['latestPrice'] = latestPrice;
			data['color'] = color;
			data['change'] = change;
			data['percentChange'] = percentChange;
			newState[symbol] = data;
			return newState;
		case ADD_ALL_TICKERS:
			return newState;
		case CLEAR_TICKER:
			return {};
		default:
			return prevState;
	}
};

export default tickerReducer;
