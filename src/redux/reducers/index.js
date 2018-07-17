import { combineReducers } from 'redux';

// parts of state
import dogsData from './dogPageReducer';
import userData from './userPageReducer';

// combine all reducers
const rootReducer = combineReducers({
  dogsData,
  userData,
});

export default rootReducer;
