import React from 'react'
import Breadcrumbs from './Breadcrumbs';
import styles from '@/app/styles/object/components/header.module.css'
import { Breadcrumb } from '@/types';

type Props = {
  title: string
  subtitle: string
  description: string
  breadcrumbs: Array<Breadcrumb>
}

const Header: React.FC<Props> = ({ title, subtitle, description, breadcrumbs }) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </header>
  )
}

export default Header
