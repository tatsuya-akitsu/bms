import React, { MouseEventHandler } from 'react'
import styles from '@/app/styles/object/components/toggle.module.css'

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
  isTrue: boolean
}

const Toggle: React.FC<Props> = ({ onClick, isTrue }) => (
  <button className={styles.toggle_button} onClick={onClick}>
    <span className={styles.toggle_base}></span>
    <span
      className={`${styles.toggle_back} ${isTrue ? styles.is_check : null}`}
    ></span>
    <span
      className={`${styles.toggle_mark} ${isTrue ? styles.is_check : null}`}
    ></span>
  </button>
);

export default Toggle
