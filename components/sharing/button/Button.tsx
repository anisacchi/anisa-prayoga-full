import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'disabled';
  shape: 'rectangle' | 'circle';
  children: React.ReactNode;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  shape = 'rectangle',
  children,
  classname,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${shape}`],
        classname
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
