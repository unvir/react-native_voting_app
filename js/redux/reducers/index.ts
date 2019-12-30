import {combineReducers} from 'redux';
import auth from './auth';
import participants from './participants';
import profile from './profile';

export default combineReducers({
  auth,
  participants,
  profile,
});
