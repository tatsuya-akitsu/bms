import { CharacterData } from '@/types'
import React from 'react'
import { useRouter } from 'next/navigation'
import Table from '@/components/organisms/table'
import Button from '@/components/modules/Button'
import styles from '@/app/styles/object/components/table.module.css';
import imageStyles from '@/app/styles/object/components/image-item.module.css';
import textStyles from '@/app/styles/object/components/text.module.css';
import { CharacterType } from '@prisma/client';

const CharacterTable: React.FC<{ data: CharacterData[], thead: Array<string> }> = ({ data, thead }) => {
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

  const handleRouteDetail = (id: string) => {
    router.push(`/characters/${id}`)
  }

  return (
    <Table thead={thead}>
      {data.map((character: CharacterData, i: number) => (
        <tr
          className={styles.tbodyrow}
          key={i}
        >
          <td className={styles.tbodydata}>
            <div
              className={imageStyles.table_character_icon}
              style={{
                backgroundImage: `url(/images/characters/character_${
                  i + 1
                }.png)`,
              }}
            ></div>
          </td>
          <td className={styles.tbodydata}>
            <p className={textStyles.table_character_label}>
              {character.label}
            </p>
            <p className={textStyles.table_character_name}>{character.name}</p>
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
              onClick={() => handleRouteDetail(`${i + 1}`)}
            />
          </td>
        </tr>
      ))}
    </Table>
  );
}

export default CharacterTable
