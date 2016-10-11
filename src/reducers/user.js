import { fromJS } from 'immutable';
import { LOGOUT, SUCCESS_LOGIN } from '../constants/UserConstants';

/* Reducer */

const initialState = fromJS({
});

function configReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SUCCESS_LOGIN:
  	return state.set('username', fromJS(action.user.username))
  				.set('permissions', fromJS(action.user.permissions));
  case LOGOUT:
  	return state.set('username', '').set('permissions', fromJS([]));
  default:
    return state;
  }
}

export default configReducer;
