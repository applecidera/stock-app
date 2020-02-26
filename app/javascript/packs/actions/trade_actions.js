import * as TradeApiUtils from '../utils/trade_api_utils'

export const CREATE_TRADE = "CREATE_TRADE"
export const RECEIVE_TRADE = "RECEIVE_TRADE"
export const RECEIVE_ALL_TRADES = "RECEIVE_ALL_TRADES"

export const receiveAllTrades = (trades) => ({
  type: RECEIVE_TICKER,
  trades: trades
});

export const receiveTrade = (trade) => ({
  type: RECEIVE_TICKER,
  trade: trade
});

export const makeTrade = (trade) => (dispatch) => {
  TradeApiUtils.createTrade(trade)
  // .then( (trade) => dispatch(receiveTrade(trade)))
}

export const fetchAllTrades = (trade) => (dispatch) => {
  TradeApiUtils.fetchAllTrades(trade)
  // .then( (trades) => dispatch(receiveAllTrade(trades)))
}

