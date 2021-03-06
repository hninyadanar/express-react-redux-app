import { combineReducers } from 'redux';
import posts from './posts';
import signup from './signup';
import authenticate from './authenticate';
import profile from './profile';
import main from './main';
import postDetail from './postDetail';
import comment from './comment';

export default combineReducers({
    posts, signup, authenticate, profile, main, postDetail, comment
})