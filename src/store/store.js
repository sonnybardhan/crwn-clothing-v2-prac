import { createStore, compose, applyMiddleware } from 'redux';
import Logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleware = [Logger];

const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhancers);
