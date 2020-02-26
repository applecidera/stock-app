import { combineReducers } from 'redux';

import tickerReducer from './ticker_reducer';
import tradesReducer from './trades_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  ticker: tickerReducer,
  trades: tradesReducer,
  user: usersReducer
});

export default entitiesReducer;
