import Button from '@components/shared/Button/Button';
import {
  DoneIcon,
  NewTasksIcon,
  InProgressIcon,
  PlusIcon,
} from '@components/shared/icons';
import { filterByName, filterByProjectId } from '@services/tasksService';
import { IProject } from '@shared/types/models/project';
import { ITask, TaskStatusType } from '@shared/types/models/tasks';
import { RootState } from '@store/index';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import TaskCard from '../TaskCards/TaskCards';
import styles from './index.module.scss';

export interface TasksColumnProps {
  type: TaskStatusType;
  project: IProject | undefined;
  searchValue: string;
}

const TasksColumn = ({ type, project, searchValue }: TasksColumnProps) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const tasks = useSelector<RootState, ITask[]>(
    (state) => filterByName(filterByProjectId(state.task.TASKS, project?.id as string), searchValue),
  );
  let filteredTasks = [...tasks];

  useEffect(() => {
    filteredTasks = filterByName(tasks, searchValue);
  }, [searchValue]);

  const assets: Record<TaskStatusType, { icon: JSX.Element; text: string }> = {
    [TaskStatusType.QUEUE]: {
      icon: NewTasksIcon,
      text: 'Queue',
    },
    [TaskStatusType.DEV]: {
      icon: InProgressIcon,
      text: 'Development',
    },
    [TaskStatusType.DONE]: {
      icon: DoneIcon,
      text: 'Done',
    },
  };

  return (
    <div className={classNames(styles.column)}>
      <div className={styles.column_controls}>
        <div className={classNames(styles.column_controls_left)}>
          {assets[type].icon}
          {assets[type].text} ({filteredTasks.filter((task) => task.status === type).length})
        </div>
        <Button
          onClick={() => setShowAddModal(true)}
          variant="empty"
        >
          <div className={styles.add_area}>{PlusIcon}</div>
        </Button>
      </div>
      <TaskCard tasks={filteredTasks} status={type} />
      {
        showAddModal
        && (
          <AddTaskModal
            project={project}
            onClose={() => setShowAddModal(false)}
            isActive={showAddModal}
            status={type}
          />
        )
      }
    </div>
  );
};

export default TasksColumn;
