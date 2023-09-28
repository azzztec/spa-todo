import Button from '@components/shared/Button/Button';
import Input from '@components/shared/Input/Input';
import Modal from '@components/shared/Modal/Modal';
import { createTask } from '@services/tasksService';
import useInput from '@shared/hooks/useInput';
import { IProject } from '@shared/types/models/project';
import { TaskStatusType } from '@shared/types/models/tasks';
import { createTaskAction } from '@store/reducers/taskReducer';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';

interface AddTaskModalProps {
  project: IProject | undefined;
  isActive: boolean;
  onClose: () => void;
  status: TaskStatusType;
}

const AddTaskModal = ({
  project, isActive, onClose, status,
}: AddTaskModalProps) => {
  const dispatch = useDispatch();
  const { value: name, handleChange: handleNameChange } = useInput('');
  const { value: description, handleChange: handleDescriptionChange } = useInput('');

  return (
    <Modal onClose={onClose} isActive={isActive}>
      <div className={styles.add_task_modal}>
        <h1 className={styles.add_task_modal_title}>Add Project</h1>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
          onClick={(e) => e.stopPropagation()}
        />
        <Input
          name="description"
          type="text"
          placeholder="Description"
          onChange={handleDescriptionChange}
          onClick={(e) => e.stopPropagation()}
        />
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={(e) => {
            e?.stopPropagation();
            dispatch(createTaskAction(createTask(
              project?.id as string,
              name,
              description,
              status,
            )));
            onClose();
          }}
        >
          save
        </Button>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
