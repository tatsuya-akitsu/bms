import React, { MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import Table from '@/components/organisms/table'
import Button from '@/components/modules/Button'
import styles from '@/app/styles/object/components/table.module.css';
import imageStyles from '@/app/styles/object/components/image-item.module.css';
import textStyles from '@/app/styles/object/components/text.module.css';
import { CharacterType, Characters } from '@prisma/client';
import Toggle from '@/components/modules/Toggle'

interface Props {
  data: Characters[]
  thead: Array<string>
  targetId: number
  loading: boolean
  onClick: (id: number, isHas: boolean) => Promise<void>
}

const CharacterTable: React.FC<Props> = ({ data, thead, targetId, loading, onClick }) => {
  const router = useRouter()

  const handleTypeValue = (type: CharacterType) => {
    switch (type) {
      case 'ATTACKER':
        return 'アタッカー';
      case 'DEFENDER':
        return 'ディフェンダー';
      default:
        return 'ゲッター';
    }
  };

  const handleRouteDetail = (uniqueId: string) => {
    router.push(`/characters/${uniqueId}`)
  }

  const handleHasCharacter = (id: number | undefined, hasCharacter: boolean) => {
    if (id && onClick) onClick(id, !hasCharacter)
  }

  return (
    <Table thead={thead}>
      {data.map((character: Characters, i: number) => {
        return (
          <tr
            className={`${styles.tbodyrow} ${
              loading && targetId === character.id ? `${styles.is_loading}` : ''
            }`}
            key={i}
          >
            <td className={styles.tbodydata}>
              <div
                className={imageStyles.table_character_icon}
                style={{
                  backgroundImage: `url(/images/characters/character_${character.id}.png)`,
                }}
              ></div>
            </td>
            <td className={styles.tbodydata}>
              <p className={textStyles.table_character_label}>
                {character.label}
              </p>
              <p className={textStyles.table_character_name}>
                {character.name}
              </p>
            </td>
            <td className={styles.tbodydata}>
              <p className={textStyles.table_character_type}>
                {handleTypeValue(character.type)}
              </p>
            </td>
            <td className={styles.tbodydata}>
              {character.isMultipleType ? (
                <img
                  className={imageStyles.attributeIcon}
                  src={`/images/types/type_${character.attributes}_${character.type}--MULTIPLE.png.webp`}
                  alt=""
                />
              ) : (
                <img
                  className={imageStyles.attributeIcon}
                  src={`/images/types/type_${character.attributes}_${character.type}.png.webp`}
                  alt=""
                />
              )}
            </td>
            <td className={styles.tbodydata}>
              <p className={textStyles.table_character_score}>
                {character.totalScore}
              </p>
            </td>
            <td className={styles.tbodydata}>
              <Button
                isDisabled={false}
                isSecondary={false}
                value={`詳細`}
                size={`is_small`}
                onClick={() => handleRouteDetail(`${character.uniqueId}`)}
              />
            </td>
            <td className={styles.tbodydata}>
              <Toggle
                isTrue={character.hasCharacter}
                onClick={() =>
                  handleHasCharacter(character.id, character.hasCharacter)
                }
              />
            </td>
          </tr>
        );
      })}
    </Table>
  );
}

export default CharacterTable
