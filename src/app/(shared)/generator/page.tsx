'use client'
import { useUserState } from '@/store/user'
import { UseCharacter } from '@/types'
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'

const Generator: React.FC = () => {
  const user = useRecoilValue(useUserState)
  const [data, setData] = useState<UseCharacter[]>([])
  const isDevFlg = useRef<boolean>(true)

  const fetchCharacterData = async () => {
    const res = await fetch(`http://localhost:3000/api/characters?uid=${user?.uid}&isList=${false}`)
    const data: UseCharacter[] = await res.json()
    const characters = data.filter((character) => character.users.length)

    setData(characters)
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isDevFlg.current) {
      isDevFlg.current = false
      return
    }

    if (user) {
      fetchCharacterData()
    }
  }, [user])

  return (
    <React.Fragment>
      <div>
        <p>
          あなたが保持されているキャラクターが表示されています。
          <br />
          使用したいメインキャラクターと希望するプレイスタイルを選択して生成ボタンを押してください。
        </p>
        <ul>
          {data.map((character: UseCharacter, i: number) => (
            <li key={i}>
              <div
                style={{
                  backgroundImage: `url(/images/characters/character_${character.id}.png)`,
                }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Generator
