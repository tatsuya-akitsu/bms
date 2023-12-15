'use client'
import { Breadcrumb } from '@/types'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/styles/object/components/breadcrumbs.module.css'
import IconChevronRight from '../icons/ChevronRight'

type Props = {
  breadcrumbs: Array<Breadcrumb>
}

const Breadcrumbs: React.FC<Props> = ({ breadcrumbs }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {breadcrumbs.map((item, i) => (
          <React.Fragment key={i}>
            <li key={i}>
              <Link href={item.path} className={styles.link}>{item.label}</Link>
            </li>
            {i !== breadcrumbs.length - 1 ? (
              <li>
                <IconChevronRight />
              </li>
            ): null}
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
