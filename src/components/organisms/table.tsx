import React from 'react'
import styles from '@/app/styles/object/components/table.module.css';

const Table: React.FC<{ children: React.ReactNode, thead: Array<string> }> = ({ children, thead }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {thead.map((value: string, i: number) => (
            <th
              className={styles.theadrow}
              key={i}
            >
              {value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

export default Table
