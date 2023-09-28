import Button from '@components/shared/Button/Button';
import {
  DoubleChevronUp,
  DoubleChevronDown,
  HorizontalDotsIcon,
  HorizontalLines,
} from '@components/shared/icons';
import { filterByStatus } from '@services/tasksService';
import { ITask, TaskPriorityType, TaskStatusType } from '@shared/types/models/tasks';
import { getTaskCardFormattedTimestamp } from '@shared/utils/dateUtils';
import { useState } from 'react';
import EditTaskModal from '../EditTaskModal/EditTaskModal';
import styles from './index.module.scss';

export interface TaskCardProps {
  tasks: ITask[];
  status: TaskStatusType;
}

const TaskCards = ({ tasks, status }: TaskCardProps) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const icons: Record<TaskPriorityType, JSX.Element> = {
    [TaskPriorityType.HIGH]: DoubleChevronUp,
    [TaskPriorityType.MEDIUM]: HorizontalLines,
    [TaskPriorityType.LOW]: DoubleChevronDown,
  };

  return (
    <>
      {filterByStatus(tasks, status).map((task) => (
        <div key={task.id} className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.name}>{task.name}</h1>
            <Button onClick={() => setShowEditModal(true)} variant="empty">
              <div className={styles.edit_area}>{HorizontalDotsIcon}</div>
            </Button>
          </div>
          <p className={styles.description}>{task.description}</p>
          <div className={styles.info}>
            <span>{getTaskCardFormattedTimestamp(task.timestamp)}</span>
            <span>{icons[task.priority]}</span>
          </div>
          {/* task.subtasks.length && (
            <>
              <p className={styles.todo_title}>{ToDoIcon} todo list:</p>
              <Subtasks
                onClick={() => console.log('TaskCard')}
                subtasks={task.subtasks}
              />
            </>
          ) */}
          {
            showEditModal
            && (
              <EditTaskModal
                task={task}
                isActive={showEditModal}
                onClose={() => setShowEditModal(false)}
              />
            )
          }
        </div>
      ))}
    </>
  );
};

export default TaskCards;
