import 'babel-polyfill';

import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import Alert from 'react-s-alert';
import DevTools from './containers/DevTools';
import configureStore from './store/configureStore';
import PieCharContainer from './containers/PieCharContainer';

const initialState = fromJS({
  dashboard: {
    // 普通订单, 改衣
    orderType: '',
    // 人身, 制服
    clothType: '',
    // 区域
    groupCode: '',
    // 衣服种类
    categoryType: '',
    // 月份
    month: '',

    orderTypeChartData: [],
    clothTypeChartData: [],
    groupCodeChartData: [],
    categoryTypeChartData: [],
    monthChartData: []
  }
});
const store = configureStore(initialState);

const injectDevTools = () => {
  if (__DEV__) {
    return (
      <DevTools />
    );
  }
  return null;
};

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <PieCharContainer />
      <Alert stack effect="slide" position="top-right" />
      { injectDevTools() }
    </div>
  </Provider>,
  document.getElementById('root')
);
