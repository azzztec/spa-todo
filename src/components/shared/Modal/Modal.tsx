import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './index.module.scss';

export interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  isActive: boolean;
}

function Modal({ children, isActive, onClose }: ModalProps) {
  return (
    <div
      className={classNames(styles.modal, {
        [`${styles.modal_active as string}`]: isActive,
      })}
      onClick={() => onClose()}
    >
      <div
        className={classNames(styles.modal_content, {
          [`${styles.modal_content_active as string}`]: isActive,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
