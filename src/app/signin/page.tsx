'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/app/styles/object/projects/signin-page.module.css'
import icon from '@/app/styles/object/components/icon.module.css';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, twitterProvider } from '@/api/firebase';

import Headline from '@/components/modules/Headline'
import Button from '@/components/modules/Button'
import Icon from '@/components/modules/Icon';
import Loading from '@/components/modules/Loading';
import { iconRatio } from '@/constants/index';
import { useRecoilState } from 'recoil';
import { useUserState } from '@/store/user';

const Signup = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [objectWidth, setWidth] = useState(0);
  const [user, setUser] = useRecoilState(useUserState)
  const [loading, setLoading] = useState<boolean>(false)

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
      setLoading(true)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        password: password,
        displayName: userCredential.user.displayName
      })
      const res = await fetch(`http://localhost:3000/api/user`, {
        method: 'PUT',
        body: JSON.stringify({
          uid: userCredential.user.uid,
          data: {
            id: userCredential.user.uid,
            email: `${userCredential.user.email}`
          }
        })
      })
      if (res.status === 200) {
        setLoading(false)
        router.push('/dashboard');
      }
    } catch (e) {
      console.error(e);
    }
  }

  const onTwitterSignin = async () => {
    try {
      setLoading(true)
      const userCredential = await signInWithPopup(auth, twitterProvider)
      setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        password: password,
        displayName: userCredential.user.displayName,
      });
      const res = await fetch(`http://localhost:3000/api/user`, {
        method: 'PUT',
        body: JSON.stringify({
          uid: userCredential.user.uid,
          data: {
            id: userCredential.user.uid,
            email: `${userCredential.user.email}`,
          },
        }),
      });
      if (res.status === 200) {
        setLoading(false)
        router.push('/dashboard');
      }
    } catch (e) {}
  }

  const onGoogleSignin = async () => {
    try {
      setLoading(true)
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        password: password,
        displayName: userCredential.user.displayName,
      });
      const res = await fetch(`http://localhost:3000/api/user`, {
        method: 'PUT',
        body: JSON.stringify({
          uid: userCredential.user.uid,
          data: {
            id: userCredential.user.uid,
            email: `${userCredential.user.email}`,
          },
        }),
      });
      if (res.status === 200) {
        setLoading(false)
        router.push('/dashboard');
      }
    } catch (e) {}
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.inner} ${loading ? styles.is_flex : ''}`}>
        {loading ? (
          <Loading />
        ) : (
          <React.Fragment>
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
                  size={`is_medium`}
                  value={`新規登録はこちら`}
                />
                <Button
                  onClick={onSignin}
                  isDisabled={false}
                  isSecondary={false}
                  size={`is_medium`}
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
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Signup
