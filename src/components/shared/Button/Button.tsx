import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './index.module.scss';

export interface ButtonProps extends PropsWithChildren {
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'success' | 'error' | 'neutral';
  variant?: 'text' | 'contained' | 'outlined' | 'empty';
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

function Button({
  children,
  onClick,
  size = 'medium',
  color = 'neutral',
  variant = 'outlined',
  startIcon,
  endIcon,
}: ButtonProps) {
  return (
    <div
      className={classNames(
        styles.button,
        styles[`button_size_${size}`],
        styles[`button_color_${color}`],
        styles[`button_variant_${variant}`],
      )}
      onClick={onClick}
    >
      {startIcon}
      {children}
      {endIcon}
    </div>
  );
}

export default Button;
