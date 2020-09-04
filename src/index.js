import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import { App } from './config/App';
import initStore from './config/store/Index';

import './assets/sass/main.scss'

const history = createBrowserHistory()
export const store = initStore(history)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App history={history} />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
