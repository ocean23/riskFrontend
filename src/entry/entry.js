import 'babel-polyfill';

import '../sass/main.scss';
import '../styles/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Immutable from 'immutable';
import { fromJS } from 'immutable';
import Alert from 'react-s-alert';

import DevTools from '../containers/DevTools';
import configureStore from '../store/configureStore';
import App from '../containers/App';
import LoginPage from '../containers/LoginPage';
import RiskEstimate from '../containers/RiskEstimate';

const initialState = fromJS({
	user: {
		username: '',
		xUserToken: '',
		permissions: [],
	}
});
const store = configureStore(initialState);

const injectDevTools = () => {
	if (__DEBUG__) {
		return (
			<DevTools />
		);
	}
	return null;
};

const basicRoutes = (
	<Route>
		<Route path="login" component={LoginPage} />
	</Route>
);

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={RiskEstimate}/>
		<Route path="riskestimate" component={RiskEstimate} />
	</Route>
);

const combinedRoutes = (
	<Route>
		<Route>
			{routes}
		</Route>
		<Route>
			{basicRoutes}
		</Route>
	</Route>
);

ReactDOM.render(
	<Provider store={ store }>
		<div>
			<Alert stack effect="slide" position="top" />
			<Router history={ browserHistory }>
				{combinedRoutes}
			</Router>
			{ injectDevTools() }
		</div>
	</Provider>,
	document.getElementById('root')
);

