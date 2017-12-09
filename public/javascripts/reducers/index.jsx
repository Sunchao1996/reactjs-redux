import todos from './todos';
import visiblityFilter from './visiblity'
import {combineReducers} from 'redux'

const todoApp = combineReducers({todos, visiblityFilter});
export  default todoApp;
