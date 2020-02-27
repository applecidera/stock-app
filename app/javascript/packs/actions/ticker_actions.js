export const CLEAR_TICKER = 'CLEAR_TICKER'
export const RECEIVE_TICKER = 'RECEIVE_TICKER'
export const ADD_ALL_TICKERS = 'RECEIVE_ALL_TICKERS'
export const ADD_TICKER = 'WATCH_TICKER'

import {lookupTicker, lookupAllTickers} from '../utils/iex_api_utils'

export const receiveTicker = (tickerData) => ({
  type: RECEIVE_TICKER,
  tickerData: tickerData
})

export const addTicker = (tickerData) => ({
  type: ADD_TICKER,
  tickerData: tickerData
})

export const addAllTicker = (tickerData) => ({
  type: ADD_ALL_TICKERS,
  tickerData: tickerData
})

export const clearTicker = () => ({
  type: CLEAR_TICKER
})

export const fetchTicker = (ticker) => (dispatch) => {
  return lookupTicker(ticker).then( 
    (tickerData) => dispatch(receiveTicker(tickerData)),
    (error) => console.log(error)
  )
}

export const watchTicker = (ticker) => (dispatch) => {
  return lookupTicker(ticker).then( 
    (tickerData) => dispatch(addTicker(tickerData)),
    (error) => console.log(error)
  )
}

export const watchAllTickers = (tickers) => (dispatch) => {
  return lookupTicker(tickers).then( 
    (tickerData) => dispatch(addAllTickers(tickerData)),
    (error) => console.log(error)
  )
}