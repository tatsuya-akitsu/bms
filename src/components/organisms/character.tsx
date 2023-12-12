'use client'
import { CharacterData } from '@/types';
import React, { ForwardedRef, forwardRef } from 'react'
import ListStyle from '@/app/styles/object/projects/characters.module.css'
import ImageStyle from '@/app/styles/object/components/image-item.module.css';

const Character: React.FC<{ character: CharacterData, index: number }> = ({ character, index }) => {
  return (
    <li>
      <div className={ListStyle.box}>
        <div className={`${ImageStyle.hexagon} ${ListStyle.thumbnail}`}>
          <div
            className={ImageStyle.image}
            style={{
              backgroundImage: `url(/images/characters/character_${
                index + 1
              }.png)`,
            }}
          ></div>
        </div>
        <div className={ListStyle.totalValue}>
          <p>{character.totalScore}</p>
        </div>
        <div className={ListStyle.attribute}>
          {character.isMultipleType ? (
            <img
              className={ImageStyle.attributeIcon}
              src={`/images/types/type_${character.attributes}_${character.type}--MULTIPLE.png.webp`}
              alt=""
            />
          ) : (
            <img
              className={ImageStyle.attributeIcon}
              src={`/images/types/type_${character.attributes}_${character.type}.png.webp`}
              alt=""
            />
          )}
        </div>
      </div>
    </li>
  );
}

Character.displayName = 'Character'

export default Character
