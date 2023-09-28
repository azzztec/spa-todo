/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import Button from '@components/shared/Button/Button';
import { AddIcon } from '@components/shared/icons';
import styles from './index.module.scss';
import AddProjectModal from './AddProjectModal/AddProjectModal';
import { useSelector } from 'react-redux';
import { IProject } from '@shared/types/models/project';
import { RootState } from '@store/index';

const Projects = () => {
  const [isShowAddModal, setShowAddModal] = useState(false);
  const projects = useSelector<RootState, IProject[]>(
    (state) => state.project.PROJECTS,
  );

  return (
    <section className={styles.layout}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tasks</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </tbody>
      </table>
      <div className={styles.skeleton_card}>
        <Button onClick={() => setShowAddModal(true)} variant="empty">
          {AddIcon}
        </Button>
      </div>
      <AddProjectModal
        isActive={isShowAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </section>
  );
};

export default React.memo(Projects);
