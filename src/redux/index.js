import splashAlert from './splashAlert';

const redux = require('redux');
const { combineReducers, createStore } = redux;

const rootReducer = combineReducers({
    splashAlert
});

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

export default store;
