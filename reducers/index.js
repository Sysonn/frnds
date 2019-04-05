import { combineReducers } from 'redux';
import frnds from "./frnds";
import posts from "./posts";
import auth from "./auth";


const frndsApp = combineReducers({
  frnds, posts, auth
})

export default frndsApp;