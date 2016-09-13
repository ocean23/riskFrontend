import { combineReducers } from 'redux-immutable';
import user from './user';
import routing from './routing';

const rootReducer = combineReducers({
  user,
  routing: routing,
});

export default rootReducer;
