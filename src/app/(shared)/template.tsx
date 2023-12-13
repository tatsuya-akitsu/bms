'use client'
import Header from '@/components/modules/Header'
import { RecoilRoot } from 'recoil';
import styles from '@/app/styles/object/projects/shared.module.css'

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <div className={styles.template}>
        <Header />
        <div>{children}</div>
      </div>
    </RecoilRoot>
  );
}
