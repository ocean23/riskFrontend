import 'babel-polyfill';

import '../styles/iceworld.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Immutable from 'immutable';
import { fromJS } from 'immutable';
import DevTools from '../containers/DevTools';
import configureStore from '../store/configureStore';
import App from '../containers/navigation/App';
import LoginPage from '../containers/navigation/LoginPage';
import LoginOtpPage from '../containers/navigation/LoginOtpPage';
import MainPage from '../containers/navigation/MainPage';

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
				<Route path="/" component={App}>
					<IndexRoute component={LoginPage}/>
		      <Route path="/login" component={LoginPage}/>
		      <Route path="/loginotp" component={LoginOtpPage}/>
		      <Route path="/main" component={MainPage}/>
	      </Route>
			</Router>
			{ injectDevTools() }
		</div>
	</Provider>,
	document.getElementById('root')
);

