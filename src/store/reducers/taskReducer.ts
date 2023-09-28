import { getFromLocalStorageByKey } from '@services/localStorageService';
import { StorageFields } from '@shared/constants';
import { TaskActions } from '@store/actions/taskActions';
import { ITask } from '@shared/types/models/tasks';

interface IAction {
  type: TaskActions;
  payload: ITask;
}

export const createTaskAction = (payload: ITask): IAction => ({
  type: TaskActions.CREATE,
  payload,
});

export const deleteTaskAction = (payload: ITask): IAction => ({
  type: TaskActions.DELETE,
  payload,
});

export const updateTaskAction = (payload: ITask): IAction => ({
  type: TaskActions.UPDATE,
  payload,
});

export type ITaskState = Record<StorageFields.TASKS, ITask[]>;

const initialState: ITaskState = {
  TASKS: getFromLocalStorageByKey<ITask[]>(StorageFields.TASKS) || [],
};

export const taskReducer = (state = initialState, action: IAction) => {
  let newState: ITaskState;
  switch (action.type) {
    case TaskActions.CREATE:
      newState = {
        TASKS: [...state.TASKS, action.payload],
      };
      break;
    case TaskActions.DELETE:
      newState = {
        TASKS: state.TASKS.filter(
          (task) => task.id !== action.payload.id,
        ),
      };
      break;
    case TaskActions.UPDATE:
      newState = {
        TASKS: state.TASKS.map((task) => (task.id === action.payload.id ? action.payload : task)),
      };
      break;
    default:
      return state;
  }

  return newState;
};
