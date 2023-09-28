import { writeToLocalStorage } from '@services/localStorageService';
import { StorageFields } from '@shared/constants';
import { ProjectActions } from '@store/actions/projectActions';
import { TaskActions } from '@store/actions/taskActions';
import { IProjectState } from '@store/reducers/projectReducer';
import { ITaskState } from '@store/reducers/taskReducer';
import { Action, Middleware, MiddlewareAPI } from 'redux';

const localStorageMiddleware: Middleware = ({ getState }: MiddlewareAPI) => {
  return (next) => <A extends Action>(action: A): A => {
    let state;
    switch (action.type) {
      case ProjectActions.CREATE:
      case ProjectActions.DELETE:
      case ProjectActions.UPDATE:
        state = getState().project as IProjectState;
        writeToLocalStorage(StorageFields.PROJECTS, state.PROJECTS);
        break;
      case TaskActions.CREATE:
      case TaskActions.DELETE:
      case TaskActions.UPDATE:
        state = getState().task as ITaskState;
        writeToLocalStorage(StorageFields.TASKS, state.TASKS);
        break;
      default:
        return next(action);
    }

    return next(action);
  };
};

export default localStorageMiddleware;
