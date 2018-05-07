import { combineReducers } from 'redux';
import posts from './posts';
import signup from './signup';
import authenticate from './authenticate';

export default combineReducers({
    posts, signup, authenticate
})