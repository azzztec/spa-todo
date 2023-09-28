import { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './index.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  label?: string;
}

const Input = ({
  label, name, error, onChange, ...restProps
}: InputProps) => (
  <>
    {label && (
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
    )}
    {label ? (
      <input
        className={styles.input}
        id={label}
        name={name}
        onChange={onChange}
        {...restProps}
      />
    ) : (
      <input
        className={styles.input}
        name={name}
        onChange={onChange}
        {...restProps}
      />
    )}
    {error && <p className={styles.error}>Input filed cant be empty!</p>}
  </>
);

export default Input;
