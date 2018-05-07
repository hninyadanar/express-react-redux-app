import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  routerReducer,
  routerMiddleware
} from 'react-router-redux'

import rootReducer from './reducers/index';
import rootSaga from './sagas';
import Root from './Root';
import history from './history';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({ routerReducer, rootReducer }),
  applyMiddleware(routerMiddleware(history)),
  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
ReactDOM.render(<Root store={store} />, document.getElementById('root'));

registerServiceWorker();