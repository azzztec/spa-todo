import Button from '@components/shared/Button/Button';
import { TrashIcon } from '@components/shared/icons';
import Input from '@components/shared/Input/Input';
import Modal from '@components/shared/Modal/Modal';
import useInput from '@shared/hooks/useInput';
import { ITask } from '@shared/types/models/tasks';
import { deleteTaskAction, updateTaskAction } from '@store/reducers/taskReducer';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';

interface EditTaskModalProps {
  task: ITask;
  isActive: boolean;
  onClose: () => void;
}

const EditTaskModal = ({ task, isActive, onClose }: EditTaskModalProps) => {
  const dispatch = useDispatch();
  const { value: name, handleChange: handleNameChange } = useInput(task.name);
  const { value: description, handleChange: handleDescriptionChange } = useInput(task.description);

  return (
    <Modal onClose={onClose} isActive={isActive}>
      <div className={styles.edit_task_modal}>
        <h1 className={styles.edit_task_modal_title}>Edit Task</h1>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          onClick={(e) => e.stopPropagation()}
        />
        <Input
          name="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          onClick={(e) => e.stopPropagation()}
        />
        <div className={styles.buttons_modal}>
          <Button
            size="small"
            color="success"
            variant="contained"
            onClick={(e) => {
              e?.stopPropagation();
              dispatch(updateTaskAction({
                ...task,
                name,
                description,
              }));
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
              dispatch(deleteTaskAction(task));
              onClose();
            }}
          >
            {TrashIcon}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
