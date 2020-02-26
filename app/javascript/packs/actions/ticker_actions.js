export const CLEAR_TICKER = 'CLEAR_TICKER'
export const RECEIVE_TICKER = 'RECEIVE_TICKER'
export const ADD_TICKER = 'WATCH_TICKER'

import {lookupTicker} from '../utils/iex_api_utils'

export const receiveTicker = (tickerData) => ({
  type: RECEIVE_TICKER,
  tickerData: tickerData
})

export const addTicker = (tickerData) => ({
  type: ADD_TICKER,
  tickerData: tickerData
})

export const clearTicker = () => ({
  type: CLEAR_TICKER
})

export const fetchTicker = (ticker) => (dispatch) => {
  lookupTicker(ticker).then( (tickerData) => dispatch(receiveTicker(tickerData)))
}

export const watchTicker = (ticker) => (dispatch) => {
  lookupTicker(ticker).then( (tickerData) => dispatch(addTicker(tickerData)))
}