import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReeducer, { AppState } from '../reducers';
import { AppActions } from '../types/appActions';

const configureStore = (initialState = {}) => createStore(
  rootReeducer,
  initialState,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
);

export default configureStore;
