import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function (initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk)),
  );
}