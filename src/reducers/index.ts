import { combineReducers } from 'redux';
import userReducer from './user';
import errorReducer from './error';

const rootReducer = combineReducers({
  users: userReducer,
  error: errorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
