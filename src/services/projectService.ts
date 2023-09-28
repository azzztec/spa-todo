import { IProject } from '@shared/types/models/project';
import { getTimestampSeconds } from '@shared/utils/dateUtils';
import { generateRandomString } from '@shared/utils/stringUtils';

export const createProject = (title: string): IProject => ({
  id: generateRandomString(),
  title,
  timestamp: getTimestampSeconds(),
});

export const updateProject = (project: IProject, title: string): IProject => ({
  ...project,
  title,
});
