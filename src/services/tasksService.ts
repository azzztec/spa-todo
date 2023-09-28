import { ITask, TaskPriorityType, TaskStatusType } from '@shared/types/models/tasks';
import { getTimestampSeconds } from '@shared/utils/dateUtils';
import { generateRandomString } from '@shared/utils/stringUtils';

export const createTask = (
  projectId: string,
  name: string,
  description: string,
  status: TaskStatusType,
  priority: TaskPriorityType = TaskPriorityType.MEDIUM,
): ITask => ({
  id: generateRandomString(),
  projectId,
  name,
  description,
  status,
  priority,
  timestamp: getTimestampSeconds(),
  subtasks: [],
});

export const filterByName = (tasks: ITask[], name: string) => {
  const str = name.trim();
  return str ? tasks.filter((task) => task.name.includes(str)) : tasks;
};

export const filterByProjectId = (tasks: ITask[], id: string) => {
  return tasks.filter((task) => task.projectId === id);
};

export const filterByStatus = (tasks: ITask[], status: TaskStatusType) => {
  return tasks.filter((task) => task.status === status);
};
