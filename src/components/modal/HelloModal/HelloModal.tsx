import Button from '@components/shared/Button/Button';
import Modal from '@components/shared/Modal/Modal';
import { useState } from 'react';
import styles from './index.module.scss';

export interface HelloModalProps {
  onClick: () => void;
}

function HelloModal({ onClick }: HelloModalProps) {
  const [isActive, setActive] = useState(true);

  return (
    <Modal
      onClose={() => {
        setActive(false);
        onClick();
      }}
      isActive={isActive}
    >
      <div className={styles.hello_modal} onClick={onClick}>
        <h1 className={styles.hello_modal_title}>Welcome</h1>
        <p className="">Organize your project workflow right now!</p>
        <Button
          size="medium"
          color="neutral"
          variant="contained"
          endIcon={<span className={styles.arrow} />}
          onClick={() => {
            onClick();
            setActive(false);
          }}
        >
          get started
        </Button>
      </div>
    </Modal>
  );
}

export default HelloModal;
