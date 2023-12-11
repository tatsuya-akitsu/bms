import { CharacterAttributes, CharacterType } from "@prisma/client"

// @TODO: 追々情報として追加するかも…？
// interface CharacterSkill {
//   name: string;
//   effect: {
//     level: number;
//     effect: string;
//     detail: string;
//   };
// }

// interface CharacterProperty {
//   uniqueFeature?: Array<{
//     label: string;
//     feature: Array<string>;
//   }>;
//   characterFeature: Array<string>;
//   feature1: Array<string>;
//   feature2: Array<string>;
//   boostFeature: Array<string>;
// }

interface CharacterModelSeed {
  name: string;
  label: string;
  type: CharacterType;
  attributes: CharacterAttributes;
  hasCharacter: boolean;
  isMultipleType: boolean;
  userId: number;
}

interface CharacterDetailModelSeed {
  maximum: {
    status: {
      level: number;
      comprehensive: number;
      strength: number;
      attack: number;
      defense: number;
      critical: number;
      boost: number;
    };
    skills: {
      skill1: number;
      skill2: number;
    };
  };
  userdata: {
    status: {
      level: number;
      comprehensive: number;
      strength: number;
      attack: number;
      defense: number;
      critical: number;
      boost: number;
      medals: {
        comprehensive: number;
        strength: number;
        attack: number;
        defense: number;
      };
    };
    skills: {
      skill1: number;
      skill2: number;
    };
  };
}

interface CharacterTagModelSeed {
  name: string;
  isActivation: boolean;
  effect: Array<{
    level: number;
    effect: string;
  }>;
}

interface Character extends CharacterModelSeed {
  maximum: CharacterDetailModelSeed['maximum'];
  tags: Array<number>;
}

interface CharacterData extends Character {
  totalScore: number;
}
