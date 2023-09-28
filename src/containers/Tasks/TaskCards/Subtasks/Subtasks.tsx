import { ISubtask, SubtaskStatus } from '@shared/types/models/tasks';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface SubtasksProps {
  onClick: () => void;
  subtasks: ISubtask[];
}

const Subtasks = ({ onClick, subtasks }: SubtasksProps) => {
  return (
    <ul className={styles.subtasks}>
      {subtasks.map((subtask) => {
        if (subtask.status === SubtaskStatus.DONE) {
          return (
            <li
              className={classNames(styles.subtask, {
                [styles.subtask_done]: true,
              })}
              onClick={onClick}
            >
              {subtask.name}
            </li>
          );
        }
        return (
          <li
            className={classNames(styles.subtask, {
              [styles.subtask_done]: false,
            })}
          >
            {subtask.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Subtasks;
