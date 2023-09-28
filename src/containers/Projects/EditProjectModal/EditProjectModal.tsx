import Button from '@components/shared/Button/Button';
import Modal from '@components/shared/Modal/Modal';
import { TrashIcon } from '@components/shared/icons';
import styles from './index.module.scss';
import Input from '@components/shared/Input/Input';
import useInput from '@shared/hooks/useInput';
import { useDispatch } from 'react-redux';
import { IProject } from '@shared/types/models/project';
import {
  deleteProjectAction,
  updateProjectAction,
} from '@store/reducers/projectReducer';
import { updateProject } from '@services/projectService';

export interface EditProjectModalProps {
  isActive: boolean;
  onClose: () => void;
  project: IProject;
}

function EditProjectModal({
  onClose,
  isActive,
  project,
}: EditProjectModalProps) {
  const dispatch = useDispatch();
  const { value: name, handleChange: handleNameChange } = useInput('');

  return (
    <Modal
      onClose={() => {
        onClose();
      }}
      isActive={isActive}
    >
      <div className={styles.edit_modal}>
        <h1 className={styles.edit_modal_title}>Edit Project</h1>
        <Input
          name="test"
          type="text"
          placeholder="New name"
          onChange={handleNameChange}
          onClick={(e) => e.stopPropagation()}
        />
        <div className={styles.buttons_modal}>
          <Button
            size="small"
            color="success"
            variant="contained"
            onClick={(e) => {
              e?.stopPropagation();
              dispatch(updateProjectAction(updateProject(project, name)));
              onClose();
            }}
          >
            save
          </Button>
          <Button
            size="small"
            color="error"
            variant="empty"
            onClick={(e) => {
              e?.stopPropagation();
              dispatch(deleteProjectAction(project));
              onClose();
            }}
          >
            {TrashIcon}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default EditProjectModal;
