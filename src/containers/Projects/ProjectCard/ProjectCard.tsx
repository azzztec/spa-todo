/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Button from '@components/shared/Button/Button';
import { EditIcon } from '@components/shared/icons';
import { filterByStatus } from '@services/tasksService';
import { getTasksPageRoute } from '@shared/constants';
import { IProject } from '@shared/types/models/project';
import { ITask, TaskStatusType } from '@shared/types/models/tasks';
import { getProjectFormattedTimestamp } from '@shared/utils/dateUtils';
import { RootState } from '@store/index';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EditProjectModal from '../EditProjectModal/EditProjectModal';
import styles from './index.module.scss';

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isShowEditModal, setShowEditModal] = useState(false);
  const tasks = useSelector<RootState, ITask[]>((state) => state.task.TASKS.filter((task) => task.projectId === project.id));

  return (
    <>
      <tr>
        <td>
          <Link to={getTasksPageRoute(project.id)}>
            <span className={styles.tasks_link}>{project.title}</span>
          </Link>
        </td>
        <td>
          <div className={styles.status}>
            <span className={styles.queued}>
              {
                filterByStatus(tasks, TaskStatusType.QUEUE).length
              }
            </span>-
            <span className={styles.dev}>
              {
                filterByStatus(tasks, TaskStatusType.DEV).length
              }
            </span>-
            <span className={styles.done}>
              {
                filterByStatus(tasks, TaskStatusType.DONE).length
              }
            </span>
          </div>
        </td>
        <td>{getProjectFormattedTimestamp(project.timestamp)}</td>
        <td>
          <Button
            onClick={() => setShowEditModal(true)}
            variant="empty"
            color="error"
          >
            {EditIcon}
          </Button>
        </td>
      </tr>
      {isShowEditModal && (
        <EditProjectModal
          isActive={isShowEditModal}
          onClose={() => setShowEditModal(false)}
          project={project}
        />
      )}
    </>
  );
};

export default ProjectCard;
