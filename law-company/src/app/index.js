import { combineReducers } from "redux";
import postsReducer from "./posts/postsSlice";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
});

export default rootReducer;
