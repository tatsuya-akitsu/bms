import React from 'react'
import styles from '@/app/styles/object/components/header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img src="/images/logo.svg" alt="Bounty Mastering Script" />
      </div>
    </header>
  )
}

export default Header
