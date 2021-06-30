import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducer'

const store = createStore(
    reducer,
    compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store

export * as actionCreator from './Actions'