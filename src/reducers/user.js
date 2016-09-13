import { fromJS } from 'immutable';
import { UPDATE_USER_DETAIL, UPDATE_USER_PRIZE, UPDATE_VISITED_LOCATION } from '../constants/HuntingConstants';

/* Reducer */

const initialState = fromJS({
});

function configReducer(state = initialState, action = {}) {
  switch (action.type) {

  case UPDATE_USER_DETAIL:
  	return state.set('openid', fromJS(action.intermedia.openid))
						.set('duck', fromJS(action.intermedia.duck))
						.set('threed', fromJS(action.intermedia.threed))
						.set('milk', fromJS(action.intermedia.milk))
						.set('iceking', fromJS(action.intermedia.iceking))
						.set('coast', fromJS(action.intermedia.coast))
						.set('count', fromJS(action.intermedia.count))
						.set('prized', fromJS(action.intermedia.prized));
  case UPDATE_USER_PRIZE:
  	return state.set('prized', true);
  case UPDATE_VISITED_LOCATION:
  	return state.set(action.intermedia.location, true)
  				.set('count', fromJS(action.intermedia.count));
  default:
    return state;
  }
}

export default configReducer;
