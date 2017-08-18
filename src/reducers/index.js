import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import notes from './note';

const note = combineReducers({ notes, routing: routerReducer });

export default note;
