import { fromJS } from 'immutable';
import { PERMISSIONS, SUCCESS_LOGIN, LOGOUT, INIT_PERMISSIONS } from '../constants/UserConstants';

/* Reducer */

const initialState = fromJS({
});

function configReducer(state = initialState, action = {}) {
	console.log('WWWWWWWWW');
	console.log(action);
	console.log('WWWWW');
  switch (action.type) {
  case SUCCESS_LOGIN:
  	console.log('pppppppppppppp');
  	return state.set('xUserToken', fromJS(action.user.xUserToken))
  					.set('username', fromJS(action.user.username));
  case LOGOUT:
  	return state.set('xUserToken', '')
  					.set('username', '');
  case PERMISSIONS:
  	console.log('@#@#@#@#@#@#@#@#@');
  	console.dir(action);
  	console.log('@#@#@#@#@#@#@#@#@');
  	return state.set('permissions', fromJS(action.intermedia.permissions));
  default:
    return state;
  }
}

export default configReducer;
