import { fromJS } from 'immutable';
import { browserHistory } from 'react-router';
import { AFTER_LOGIN, AFTER_LOGIN_OTP } from '../constants/UserConstants';

/* Reducer */

const initialState = fromJS({
});

function configReducer(state = initialState, action = {}) {
  switch (action.type) {
  case AFTER_LOGIN:
		browserHistory.push('/loginotp');
  	return state.set('validAuthenticatioin', true)
  						.set('username', fromJS(action.user.username))
  						.set('password', fromJS(action.user.password));
  case AFTER_LOGIN_OTP:
		browserHistory.push('/main');
  	return state.set('xUserToken', fromJS(action.xUserToken));
  default:
    return state;
  }
}

export default configReducer;
