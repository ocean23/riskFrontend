import { fromJS } from 'immutable';
import { AFTER_LOGIN, AFTER_LOGIN_OTP } from '../constants/UserConstants';

/* Reducer */

const initialState = fromJS({
});

function configReducer(state = initialState, action = {}) {
  switch (action.type) {

  case AFTER_LOGIN:
  	return state.set('validAuthenticatioin', true)
  						.set('username', fromJS(action.intermedia.username))
  						.set('password', fromJS(action.intermedia.password));
  default:
    return state;
  }
}

export default configReducer;
