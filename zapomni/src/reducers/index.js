import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  events: eventsReducer,
});