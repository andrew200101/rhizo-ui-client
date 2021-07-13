import { applyMiddleware, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { SagaWatcher } from './saga/SagaWatcher';
import reducer from './state';

const middleware: Array<Middleware> = [];

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const Store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(SagaWatcher);

if (process.env.NODE_ENV !== 'production') {
    (window as any).Store = Store;
}

export { Store };
