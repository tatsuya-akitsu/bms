'use client'
import Flash from '@/components/icons/Flash'
import Hammer from '@/components/icons/Hammer'
import HeartBeat from '@/components/icons/HeartBeat'
import Shield from '@/components/icons/Shield'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import styles from '@/app/styles/object/projects/character.module.css'
import { useRecoilValue } from 'recoil'
import { useUserState } from '@/store/user'
import { CharacterState } from '@/types'

const CharacterDetail = () => {
  const pathname = usePathname()
  const id = pathname.split('/')[2]
  const user = useRecoilValue(useUserState)
  const [data, setData] = useState<CharacterState>()
  const isDevFlg = useRef<boolean>(true)

  const fetchCharacter = async (id: string | null, uid: string | undefined) => {
    const res = await fetch(
      `http://localhost:3000/api/character?id=${id}&uid=${uid}`
    );
    const data: CharacterState = await res.json()
    setData(data)
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isDevFlg.current) {
      isDevFlg.current = false
      return
    }

    if (user) {
      fetchCharacter(id, user.uid)
    }
  }, [user])

  return (
    <div className={styles.wrapper}>
      <div className={styles.left_box}>
        <p className={styles.label}>{data?.characterData.label}</p>
        <h2 className={styles.name}>{data?.characterData.name}</h2>
        <div className={styles.status}>
          <div>
            <p className={styles.level}>Lv. {data?.status.status.level}</p>
            <div className={styles.power_box}>
              <p className={styles.power_label}>キャラ総合力</p>
              <p className={styles.power_value}>
                {data?.status.status.comprehensive}
              </p>
            </div>
          </div>
          <ul className={styles.status_list}>
            <li className={styles.status_item}>
              <div className={styles.status_label_box}>
                <HeartBeat />
                <p>体力</p>
              </div>
              <p className={styles.status_score}>{data?.status.status.strength}</p>
            </li>
            <li className={styles.status_item}>
              <div className={styles.status_label_box}>
                <Hammer />
                <p>攻撃力</p>
              </div>
              <p className={styles.status_score}>{data?.status.status.attack}</p>
            </li>
            <li className={styles.status_item}>
              <div className={styles.status_label_box}>
                <Shield />
                <p>防御力</p>
              </div>
              <p className={styles.status_score}>{data?.status.status.defense}</p>
            </li>
            <li className={styles.status_item}>
              <div className={styles.status_label_box}>
                <Flash />
                <p>クリティカル</p>
              </div>
              <p className={styles.status_score}>{data?.status.status.critical}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right_box}>
        <div
          className={styles.character_image}
          style={{
            backgroundImage: `url(/images/characters/character_${data?.characterData.id}.png)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default CharacterDetail
