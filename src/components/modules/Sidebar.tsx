import React from 'react'
import styles from '@/app/styles/object/components/sidebar.module.css'
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { useUserState } from '@/store/user';

const Sidebar: React.FC = () => {
  const navigation: Array<{ label: string; path: string }> = [
    { label: 'キャラクター一覧', path: 'characters' },
    { label: 'シミュレーター', path: 'simulator' },
    { label: 'AIパーティー生成', path: 'aigenerate' }
  ];
  const subnavigation: Array<{ initial: string; label: string; path: string }> = [
    { initial: 'H', label: '所持キャラクター一覧', path: 'character/has' },
    { initial: 'S', label: '設定', path: 'settings' }
  ]
  const segment = useSelectedLayoutSegment()
  const user = useRecoilValue(useUserState)

  return (
    <div className={styles.sidebar}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img
            src="/images/logo.svg"
            alt="Bounty Mastering Script"
          />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <ul className={styles.inner_list}>
                {navigation.map((nav, i) => (
                  <li
                    className={styles.inner_list_item}
                    key={i}
                  >
                    <Link className={nav.path === segment ? styles.is_active : ''} href={`/${nav.path}`}>
                      <span>{nav.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <p className={styles.list_label}>Your Data</p>
              <ul className={styles.list_inner_list}>
                {subnavigation.map((nav, i) => (
                  <li className={styles.list_inner_item} key={i}>
                    <Link href={`/${nav.path}`}>
                      <span className={styles.subitem_icon}>{nav.initial}</span>
                      <span className={styles.subitem_label}>{nav.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className={styles.list_last_item}></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar
