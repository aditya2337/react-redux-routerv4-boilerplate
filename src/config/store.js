import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

/* Redux Thunk middleware allows you to write action creators
 that return a function instead of an action. */
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;
