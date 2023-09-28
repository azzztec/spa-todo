import { getFromLocalStorageByKey } from '@services/localStorageService';
import { StorageFields } from '@shared/constants';
import { ProjectActions } from '@store/actions/projectActions';
import { IProject } from '@shared/types/models/project';

interface IAction {
  type: ProjectActions;
  payload: IProject;
}

export const createProjectAction = (payload: IProject): IAction => ({
  type: ProjectActions.CREATE,
  payload,
});

export const deleteProjectAction = (payload: IProject): IAction => ({
  type: ProjectActions.DELETE,
  payload,
});

export const updateProjectAction = (payload: IProject): IAction => ({
  type: ProjectActions.UPDATE,
  payload,
});

export type IProjectState = Record<StorageFields.PROJECTS, IProject[]>;

const initialState: IProjectState = {
  PROJECTS: getFromLocalStorageByKey<IProject[]>(StorageFields.PROJECTS) || [],
};

export const projectReducer = (state = initialState, action: IAction) => {
  let newState: IProjectState;
  switch (action.type) {
    case ProjectActions.CREATE:
      newState = {
        PROJECTS: [...state.PROJECTS, action.payload],
      };

      break;
    case ProjectActions.DELETE:
      newState = {
        PROJECTS: state.PROJECTS.filter(
          (project) => project.id !== action.payload.id,
        ),
      };
      break;
    case ProjectActions.UPDATE:
      newState = {
        PROJECTS: state.PROJECTS.map((project) => (project.id === action.payload.id ? action.payload : project)),
      };
      break;
    default:
      return state;
  }

  return newState;
};
