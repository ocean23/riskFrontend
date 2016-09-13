import { fromJS } from 'immutable';
import { UPDATE_ALREADY_SUBMIT } from '../constants/AppConstants';

/* Reducer */

const initialState = fromJS({
});

function configReducer(state = initialState, action = {}) {
  switch (action.type) {

  case UPDATE_ALREADY_SUBMIT:
  	return state.set('alreadySubmit', true);
  default:
    return state;
  }
}

export default configReducer;
