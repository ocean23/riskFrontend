import { fromJS } from 'immutable';
import { browserHistory } from 'react-router';
import { SUCCESS_LOGIN } from '../constants/UserConstants';

/* Reducer */

const initialState = fromJS({
});

function configReducer(state = initialState, action = {}) {
  switch (action.type) {
  case SUCCESS_LOGIN:
		browserHistory.push('/main');
  	return state.set('xUserToken', fromJS(action.user.xUserToken))
  					.set('username', fromJS(action.user.username));
  default:
    return state;
  }
}

export default configReducer;
