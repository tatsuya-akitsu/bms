'use client'
import Header from '@/components/modules/Header'
import Sidebar from '@/components/modules/Sidebar'
import { RecoilRoot } from 'recoil';
import styles from '@/app/styles/object/projects/shared.module.css'
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from '@/types';

export default function RootTemplate({
  children,
}: {
    children: React.ReactNode;
  }) {
  const pathname = usePathname()
  const [header, setHeader] = useState<{ title: string; subtitle: string; description: string }>({
    title: '',
    subtitle: '',
    description: ''
  })
  const initialBreadcrumb: Breadcrumb = { path: '/dashboard', label: 'ダッシュボード' }
  const [breadcrumbs, setBreadcrumbs] = useState<
    Array<Breadcrumb>
    >([
    { path: '/dashboard', label: 'ダッシュボード' }
  ]);
  const isDevFlg = useRef<boolean>(true)

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (isDevFlg.current) {
        isDevFlg.current = false;
        return;
      }
    }
    let currentBreadcrumb: Breadcrumb = { path: '', label: '' }
    let breadcrumbs: Array<Breadcrumb> = []
    switch (pathname) {
      case '/characters':
        setHeader({
          title: 'キャラクター一覧',
          subtitle: 'Character List',
          description:
            'バウンティラッシュ実装済みキャラクター一覧です。随時更新していきます。',
        });
        currentBreadcrumb = { path: '/characters', label: 'キャラクター一覧' }
        breadcrumbs = [currentBreadcrumb]
        setBreadcrumbs(breadcrumbs)
        break;
      // ダッシュボード
      default:
        setHeader({
          title: 'ダッシュボード',
          subtitle: 'dashboard',
          description:
            'バウンティラッシュ実装済みキャラクター一覧です。随時更新していきます。',
        });
        breadcrumbs = [initialBreadcrumb];
        setBreadcrumbs(breadcrumbs);
        break;
    }
  }, [pathname])
  return (
    <RecoilRoot>
      <div className={styles.template}>
        <Sidebar />
        <div className={styles.container}>
          <Header title={header.title} subtitle={header.subtitle} description={header.description} breadcrumbs={breadcrumbs} />
          <div>{children}</div>
        </div>
      </div>
    </RecoilRoot>
  );
}
