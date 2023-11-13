import { CharacterAttributes, CharacterType } from "@prisma/client"

interface CharactersSeed {
  name: string
  label: string
  attributes: CharacterAttributes
  type: CharacterType
  totalScore: number
  boost: 0 | 1 | 2 | 3
  hasCharacter: boolean
  userId: number
}

interface CharacterTagSeed {
  name: string;
  isActivation: boolean;
  effect: Array<{
    level: number;
    effect: string;
  }>;
}

interface CharacterSkill {
  name: string;
  effects: Array<{
    level: 1 | 2 | 3 | 4 | 5;
    effect: string
  }>;
}

interface CharacterProperty {
  uniqueFeature?: Array<{
    label: string;
    feature: Array<string>;
  }>;
  characterFeature: Array<string>;
  feature1: Array<string>;
  feature2: Array<string>;
  boostFeature: Array<string>;
}

interface Characters {
  name: string;
  label: string;
  boost: 0 | 1 | 2 | 3;
  attributes: CharacterAttributes;
  type: CharacterType;
  status: {
    level: number;
    totalScore: number;
    strength: number;
    attack: number;
    defense: number;
    critical: number;
    charaBoost: number;
  };
  skill: {
    skill1: CharacterSkill | Array<CharacterSkill>;
    skill2: CharacterSkill | Array<CharacterSkill>;
    teamBoost: {
      name: string;
      effect: string;
    };
  };
  property: CharacterProperty;
  hasCharacter: boolean;
  userId: number;
}
