import React from 'react'
import styles from '@/app/styles/object/components/headline.module.css'

interface HeadlineProps {
  label: string
  title: string
}

const Headline: React.FC<HeadlineProps> = ({ label, title }) => {
  return (
    <h2 className={styles.headline}>
      <span>{label}</span>
      <p>{title}</p>
    </h2>
  )
}

export default Headline
