import Button from '@components/shared/Button/Button';
import Modal from '@components/shared/Modal/Modal';
import styles from './index.module.scss';
import Input from '@components/shared/Input/Input';
import useInput from '@shared/hooks/useInput';
import { useDispatch } from 'react-redux';
import { createProjectAction } from '@store/reducers/projectReducer';
import { createProject } from '@services/projectService';

export interface AddProjectModalProps {
  isActive: boolean;
  onClose: () => void;
}

function AddProjectModal({ onClose, isActive }: AddProjectModalProps) {
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
        <h1 className={styles.edit_modal_title}>Add Project</h1>
        <Input
          name="test"
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
          onClick={(e) => e.stopPropagation()}
        />
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={(e) => {
            e?.stopPropagation();
            dispatch(createProjectAction(createProject(name)));
            onClose();
          }}
        >
          save
        </Button>
      </div>
    </Modal>
  );
}

export default AddProjectModal;
