import { combineReducers } from 'redux';
import { projectReducer } from './projectReducer';
import { taskReducer } from './taskReducer';

const rootReducer = combineReducers({
  project: projectReducer,
  task: taskReducer,
});

export default rootReducer;
