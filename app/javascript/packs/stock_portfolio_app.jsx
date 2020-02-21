import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState = undefined;

  ReactDOM.render(
    <Root />,
    document.body.appendChild(document.createElement('div')),
  )
})
