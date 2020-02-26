import { combineReducers } from 'redux';

import tickerReducer from './ticker_reducer';
import tradesReducer from './trades_reducer';

const entitiesReducer = combineReducers({
  ticker: tickerReducer,
  trades: tradesReducer
});

export default entitiesReducer;
