import React from 'react'
import styles from '@/app/styles/object/components/loading.module.css'

const Loading: React.FC = () => {
  return (
    <div className={styles.loading_box}>
      <div className={styles.loading}></div>
    </div>
  );
}

export default Loading
