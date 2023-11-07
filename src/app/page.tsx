'use client';
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageItem from '@/components/modules/ImageItem';
import Button from '@/components/modules/Button'
import styles from '@/app/styles/object/projects/front-page.module.css'
import utilities from '@/app/styles/object/utilities/sizing.module.css'

const Home = () => {
  const router = useRouter()
  const [objectWidth, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize()
  }, []);

  return (
    <main className={`${styles.container} ${utilities.fullHeight} ${utilities.fullWidth}`}>
      <div className={styles.inner}>
        <div className={styles.backgroundImage}>
          <ImageItem
            imagePath="/images/img_luffy.png"
            alt="ギア5 モンキー・D・ルフィ"
            multiplier="0.8"
            objectWidth={objectWidth}
          />
        </div>
        <div className={styles.logo}>
          <ImageItem
            imagePath="/images/logo.svg"
            alt="Bounty Mastering Script"
            multiplier="0.8"
            objectWidth={objectWidth}
          />
        </div>
        <div className={styles.linkBox}>
          <Button
            onClick={() => router.push('/signin')}
            isDisabled={false}
            isSecondary={false}
            value={`ログイン`}
          />
          <Button
            onClick={() => router.push('/signup')}
            isDisabled={false}
            isSecondary={true}
            value={`新規登録`}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
