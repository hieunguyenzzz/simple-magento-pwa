import {createStore, applyMiddleware} from 'redux';
import RootReducer from './reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension';

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch)
    }
    return next(action);

}

const logging = (store) => (next) => (action) => {
    console.log(action);
    return next(action);
}

const configureStore = (preloadState) => {
    const middleWares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middleWares);

    const storeEnhancer = [middlewareEnhancer];

    const composedEnhancer = composeWithDevTools(...storeEnhancer);

    return createStore(RootReducer, preloadState, composedEnhancer);
}


export default configureStore;
