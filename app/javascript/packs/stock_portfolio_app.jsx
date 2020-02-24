import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState = undefined;

  if (window.currentUser) {
		preloadedState = {
			session: {
				currentUser: window.currentUser
			}
		}
		
		store = configureStore(preloadedState);
		
		delete window.currentUser;
	} else {
		store = configureStore();
	}

	let div = document.createElement('div');
	div.setAttribute('class','root');

  ReactDOM.render(
    <Root store={store}/>,
    document.body.appendChild(div)
  )
})
