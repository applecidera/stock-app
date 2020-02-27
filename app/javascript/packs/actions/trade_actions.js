import * as TradeApiUtils from '../utils/trade_api_utils'

export const RECEIVE_TRADE = "RECEIVE_TRADE"
export const RECEIVE_ALL_TRADES = "RECEIVE_ALL_TRADES"

export const receiveAllTrades = (trades) => ({
  type: RECEIVE_ALL_TRADES,
  trades: trades
});

export const receiveTrade = (trade) => ({
  type: RECEIVE_TRADE,
  trade: trade
});

export const makeTrade = (trade) => (dispatch) => {
  TradeApiUtils.createTrade(trade)
  .then( (trade) => dispatch(receiveTrade(trade)))
}

export const fetchAllTrades = (userId) => (dispatch) => {
  TradeApiUtils.fetchAllTrades(userId)
  .then( (trades) => dispatch(receiveAllTrades(trades)))
}

