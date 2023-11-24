'use client'
import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/app/styles/object/projects/signin-page.module.css'
import icon from '@/app/styles/object/components/icon.module.css';
import utilities from '@/app/styles/object/utilities/sizing.module.css'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, twitterProvider } from '@/api/firebase';

import Headline from '@/components/modules/Headline'
import Button from '@/components/modules/Button'
import Icon from '@/components/modules/Icon';
import { iconRatio } from '@/constants/index';
import { useRecoilState } from 'recoil';
import { useUserState } from '@/store/user';

const Signup = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [objectWidth, setWidth] = useState(0);
  const [user, setUser] = useRecoilState(useUserState)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize()
  }, []);

  const onSignin = async () => {
    if (!email) return;
    if (!password) return;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        password: password,
        displayName: userCredential.user.displayName
      })
      router.push('/dashboard')
    } catch (e) {
      console.error(e);
    }
  }

  const onTwitterSignin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, twitterProvider)
      await setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        password: password,
        displayName: userCredential.user.displayName,
      });
      router.push('/dashboard');
    } catch (e) {}
  }

  const onGoogleSignin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      await setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        password: password,
        displayName: userCredential.user.displayName,
      });
      router.push('/dashboard');
    } catch (e) {}
  }

  return (
    <div
      className={`${styles.container} ${utilities.fullHeight} ${utilities.fullWidth}`}
    >
      <div className={styles.inner}>
        <Headline
          label={`Login`}
          title={`ログイン`}
        />
        <div className={styles.formBox}>
          <div className={styles.formBoxItem}>
            <p>メールアドレス</p>
            <input
              type="email"
              name="email"
              placeholder="メールアドレス"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formBoxItem}>
            <p>パスワード</p>
            <input
              type="password"
              name="password"
              placeholder="パスワード"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.formBoxItem}>
            <Button
              onClick={() => router.push('/signup')}
              isDisabled={false}
              isSecondary={true}
              value={`新規登録はこちら`}
            />
            <Button
              onClick={onSignin}
              isDisabled={false}
              isSecondary={false}
              value={`ログイン`}
            />
          </div>
          <hr className={styles.separator} />
          <div className={styles.socialLoginBox}>
            <button
              type="button"
              className={icon.icon}
              style={{
                width: `calc(${objectWidth}px / ${iconRatio})`,
                height: `calc(${objectWidth}px / ${iconRatio})`,
              }}
              onClick={onTwitterSignin}
            >
              <Icon
                imagePath={'/images/icon_social--twitter.svg'}
                alt={'Twitter'}
              />
            </button>
            <button
              type="button"
              className={icon.icon}
              style={{
                width: `calc(${objectWidth}px / ${iconRatio})`,
                height: `calc(${objectWidth}px / ${iconRatio})`,
              }}
              onClick={onGoogleSignin}
            >
              <Icon
                imagePath={'/images/icon_social--google.svg'}
                alt={'Google'}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup
