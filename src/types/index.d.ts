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

interface CharacterModel {
  name: string;
  label: string;
  type: CharacterType;
  attributes: CharacterAttributes;
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
  tags: Array<number>;
  hasCharacter: boolean;
  isMultipleType: boolean;
  userId: string;
}

interface Tag {
  name: string;
  isActivation: boolean;
  effect: Array<{
    level: number;
    effect: string;
  }>;
}

interface Breadcrumb {
  path: string;
  label: string;
}

interface FilterItem {
  label: string;
  value: string;
  isSelect: boolean;
};

interface UserState {
  uid: string;
  email: string | null;
  password?: string;
  displayName: string | null;
}
