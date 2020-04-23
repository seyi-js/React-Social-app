import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';

export default combineReducers({
    msg: messagesReducer,
    
    
    
  });