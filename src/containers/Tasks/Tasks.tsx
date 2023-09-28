import Input from '@components/shared/Input/Input';
import useInput from '@shared/hooks/useInput';
import useThrottle from '@shared/hooks/useThrottle';
import { IProject } from '@shared/types/models/project';
import { TaskStatusType } from '@shared/types/models/tasks';
import { RootState } from '@store/index';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styles from './index.module.scss';
import TasksColumn from './TasksColumn/TasksColumn';

const Tasks = () => {
  const params = useParams();
  const { value, handleChange: handleChangeSearchName } = useInput();
  const throttledSearchName = useThrottle(value);
  const project = useSelector<RootState, IProject[]>(
    (state) => state.project.PROJECTS,
  );
  const currentProject = project.find((_project) => _project.id === params.id);

  if (!currentProject) {
    return null;
  }

  return (
    <section className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.project_name}>
          {currentProject?.title}
        </div>
        <div>
          <Input
            placeholder="Search by name"
            onChange={handleChangeSearchName}
          />
        </div>
      </div>
      <div className={styles.columns}>
        <TasksColumn
          type={TaskStatusType.QUEUE}
          project={currentProject}
          searchValue={throttledSearchName}
        />
        <TasksColumn
          type={TaskStatusType.DEV}
          project={currentProject}
          searchValue={throttledSearchName}
        />
        <TasksColumn
          type={TaskStatusType.DONE}
          project={currentProject}
          searchValue={throttledSearchName}
        />
      </div>
    </section>
  );
};

export default React.memo(Tasks);
