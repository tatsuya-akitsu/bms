import { CharacterAttributes, CharacterType } from "@prisma/client"

interface Characters {
  name: string
  label: string
  attributes: CharacterAttributes
  type: CharacterType
  totalScore: number
  boost: 0 | 1 | 2 | 3
}
