'use client'
import Flash from '@/components/icons/Flash'
import Hammer from '@/components/icons/Hammer'
import HeartBeat from '@/components/icons/HeartBeat'
import Shield from '@/components/icons/Shield'
import { usePathname, useSearchParams } from 'next/navigation'
import { cache, use } from 'react'
import styles from '@/app/styles/object/projects/character.module.css'
import { Character, CharacterMaximum, CharacterMaximumSkill, CharacterMaximumStatus, CharacterTag, Characters } from '@prisma/client'

const getCharacterDetail = cache((id: string | null) =>
  fetch(`http://localhost:3000/api/character?id=${id}`).then((res) => res.json())
)

const getCharacter = cache((id: string | null) =>
  fetch(`http://localhost:3000/api/characters/${id}?id=${id}`).then((res) => res.json())
)

interface CharacterStatus extends CharacterMaximum {
  skill: CharacterMaximumSkill;
  status: CharacterMaximumStatus;
}

interface CharacterDetail extends Character {
  status: CharacterStatus;
  tags: CharacterTag[];
}

const CharacterDetail = () => {
  const pathname = usePathname()
  const id = pathname.split('/')[2]
  const characterData = use<Characters>(getCharacter(id))
  const detailData = use<CharacterDetail>(getCharacterDetail(id));

  return (
    <div className={styles.wrapper}>
      <div className={styles.left_box}>
        <p className={styles.label}>{characterData.label}</p>
        <h2 className={styles.name}>{characterData.name}</h2>
        <div className={styles.status}>
          <div>
            <p className={styles.level}>Lv. {detailData.status.status.level}</p>
            <div className={styles.power_box}>
              <p className={styles.power_label}>キャラ総合力</p>
              <p className={styles.power_value}>
                {detailData.status.status.comprehensive}
              </p>
            </div>
          </div>
          <ul className={styles.status_list}>
            <li className={styles.status_item}>
              <div className={styles.status_label_box}>
                <HeartBeat />
                <p>体力</p>
              </div>
              <p className={styles.status_score}>{detailData.status.status.strength}</p>
            </li>
            <li className={styles.status_item}>
              <div className={styles.status_label_box}>
                <Hammer />
                <p>攻撃力</p>
              </div>
              <p className={styles.status_score}>{detailData.status.status.attack}</p>
            </li>
            <li className={styles.status_item}>
              <div className={styles.status_label_box}>
                <Shield />
                <p>防御力</p>
              </div>
              <p className={styles.status_score}>{detailData.status.status.defense}</p>
            </li>
            <li className={styles.status_item}>
              <div className={styles.status_label_box}>
                <Flash />
                <p>クリティカル</p>
              </div>
              <p className={styles.status_score}>{detailData.status.status.critical}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right_box}>
        <div
          className={styles.character_image}
          style={{
            backgroundImage: `url(/images/characters/character_${characterData.id}.png)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default CharacterDetail
