import { combineReducers } from 'redux';
import { notesReducer } from './NotesReducer';

const rootReducer = combineReducers({
  notesReducer: notesReducer,
});

export default rootReducer;