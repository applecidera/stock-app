import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState = undefined;

  store = configureStore(preloadedState);

  ReactDOM.render(
    <Root store={store}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
