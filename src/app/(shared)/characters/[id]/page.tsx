'use client'
import { Character, CharacterData, CharacterDetailModelSeed } from '@/types'
import { usePathname, useSearchParams } from 'next/navigation'
import { cache, use } from 'react'

const getCharacterDetail = cache((id: string | null) =>
  fetch(`http://localhost:3000/api/character?id=${id}`).then((res) => res.json())
)

const getCharacter = cache((id: string | null) =>
  fetch(`http://localhost:3000/api/characters/${id}?id=${id}`).then((res) => res.json())
)

const getCharacterDetailTag = cache((id: string | null) =>
  fetch(`http://localhost:3000/api/`)
)

const CharacterDetail = () => {
  const pathname = usePathname()
  const id = pathname.split('/')[2]
  const characterData = use<CharacterData>(getCharacter(id))
  const detailData = use<Character>(getCharacterDetail(id))

  return (
    <div>character detail</div>
  )
}

export default CharacterDetail
