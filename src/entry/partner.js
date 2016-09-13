import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import DevTools from '../containers/DevTools';
import configureStore from '../store/configureStore';
import MainPartner from '../containers/partner/MainPartner';

const initialState = fromJS({
	rent: {
		alreadySubmit: false
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
			<MainPartner />
			{ injectDevTools() }
		</div>
	</Provider>,
	document.getElementById('root')
);
