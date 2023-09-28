export enum TaskPriorityType {
  HIGH,
  MEDIUM,
  LOW,
}

export enum TaskStatusType {
  QUEUE,
  DEV,
  DONE,
}

export enum SubtaskStatus {
  IN_PROGRESS,
  DONE,
}

export interface ISubtask {
  id: string;
  name: string;
  status: SubtaskStatus;
}

export interface ITask {
  id: string;
  projectId: string;
  name: string;
  priority: TaskPriorityType;
  status: TaskStatusType;
  description: string;
  timestamp: number;
  subtasks: ISubtask[];
}
