import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todos from '../modules/todos';
import workState from '../modules/selectChange';

const rootReducer = combineReducers({
    todos,
    workState,
});

const store = createStore(rootReducer);

export default store;
