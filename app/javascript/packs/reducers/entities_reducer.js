import { combineReducers } from 'redux';

import tickerReducer from './ticker_reducer';

const entitiesReducer = combineReducers({
  ticker: tickerReducer
});

export default entitiesReducer;
