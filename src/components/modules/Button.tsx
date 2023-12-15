import React, { FC, MouseEventHandler } from 'react';
import styles from '@/app/styles/object/components/button.module.css'

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean
  isSecondary: boolean
  size: 'is_large' | 'is_medium' | 'is_small'
  value: string
}

const Button: FC<ButtonProps> = ({ onClick, isDisabled, isSecondary, size, value }) => {
  return (
    <button className={`${styles.button} ${isSecondary ? styles.isSecond : ''} ${styles[size]}`} type="button" disabled={isDisabled} onClick={onClick}>
      <span>{value}</span>
    </button>
  );
};

export default Button;
