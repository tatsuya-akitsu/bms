'use client'
import Header from '@/components/modules/Header'
import Sidebar from '@/components/modules/Sidebar'
import { useSetRecoilState } from 'recoil';
import styles from '@/app/styles/object/projects/shared.module.css'
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Breadcrumb } from '@/types';
import { Characters } from '@prisma/client';
import useAuth from '@/hooks/useAuth';
import { useUserState } from '@/store/user';

export default function RootTemplate({
  children,
}: {
    children: React.ReactNode;
  }) {
  const { user, loading } = useAuth()
  const setUser = useSetRecoilState(useUserState)
  const router = useRouter()
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
    let prevBreadcrumb: Breadcrumb = { path: '', label: '' }
    let breadcrumbs: Array<Breadcrumb> = []

    const characterDetailPathMatch = /^\/characters\/(\d+)_(\w+)$/;
    if (characterDetailPathMatch.test(pathname)) {
      const characterId = pathname.split('/')[2]
      const fetchData = async () => {
        const res = await fetch(
          `http://localhost:3000/api/characters/${characterId}?id=${characterId}`
        );
        const data: Characters = await res.json()

        setHeader({
          title: `${data.label} ${data.name}`,
          subtitle: 'Character Detail',
          description: `${data.label} ${data.name}についての詳細情報です。最大まで強化したときのステータスで表示しています。`
        });
        prevBreadcrumb = {
          path: '/characters',
          label: 'キャラクター一覧',
        };
        currentBreadcrumb = {
          path: pathname,
          label: `${data.label} ${data.name}`
        }
        breadcrumbs = [prevBreadcrumb, currentBreadcrumb];
        setBreadcrumbs(breadcrumbs);
      }
      fetchData()
    } else {
      switch (pathname) {
        case '/characters':
          setHeader({
            title: 'キャラクター一覧',
            subtitle: 'Character List',
            description:
              'バウンティラッシュ実装済みキャラクター一覧です。随時更新していきます。',
          });
          currentBreadcrumb = {
            path: '/characters',
            label: 'キャラクター一覧',
          };
          breadcrumbs = [currentBreadcrumb];
          setBreadcrumbs(breadcrumbs);
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
    }
  }, [pathname])

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isDevFlg.current) {
      isDevFlg.current = false
      return
    }

    if (loading) return
    if (!user) {
      router.push('/signin')
    }
  }, [user, loading, router])

  return (
    <div className={styles.template}>
      <Sidebar />
      <div className={styles.container}>
        <Header title={header.title} subtitle={header.subtitle} description={header.description} breadcrumbs={breadcrumbs} />
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
}
