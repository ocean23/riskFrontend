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
import Home from '../containers/navigation/Home';
import MapPage from '../containers/navigation/MapPage';
import TreasurePage from '../containers/navigation/TreasurePage';
import DuckPage from '../containers/navigation/DuckPage';
import ThreedPage from '../containers/navigation/ThreedPage';
import MilkPage from '../containers/navigation/MilkPage';
import IcekingPage from '../containers/navigation/IcekingPage';
import CoastPage from '../containers/navigation/CoastPage';
import PrizePage from '../containers/navigation/PrizePage';

const initialState = fromJS({
  user: {
    openid: '',
    duck: false,
    threed: false,
    milk: false,
    iceking: false,
    coast: false,
    count: 0,
    prized: false
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
					<IndexRoute component={Home}/>
		      <Route path="/map" component={MapPage}/>
		      <Route path="/treasure" component={TreasurePage}/>
		      <Route path="/duck" component={DuckPage}/>
		      <Route path="/threed" component={ThreedPage}/>
		      <Route path="/milk" component={MilkPage}/>
		      <Route path="/iceking" component={IcekingPage}/>
		      <Route path="/coast" component={CoastPage}/>
		      <Route path="/prize" component={PrizePage}/>
	      </Route>
			</Router>
			{ injectDevTools() }
		</div>
	</Provider>,
	document.getElementById('root')
);

