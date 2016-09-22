import 'babel-polyfill';

import '../styles/common.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Immutable from 'immutable';
import { fromJS } from 'immutable';
import DevTools from '../containers/DevTools';
import configureStore from '../store/configureStore';
import LoginPage from '../containers/LoginPage';

const initialState = fromJS({
  user: {
  	validAuthenticatioin: false,
    userId: '',
    username: '',
    password: '',
    xUserToken: ''
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

ReactDOM.render(
	<Provider store={ store }>
		<div>
			<Router history={ browserHistory }>
				<Route path="/" component={LoginPage} />
			</Router>
			{ injectDevTools() }
		</div>
	</Provider>,
	document.getElementById('root')
);

