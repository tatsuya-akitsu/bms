import { Characters } from '@/types';
import { CharacterAttributes, CharacterType } from '@prisma/client';

export const characters: Characters[] = [
  {
    name: 'シャンクス',
    label: 'FILM RED',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: 'ギア 5',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ルフィ太郎',
    label: 'ワノ国',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ホネ吉',
    label: 'ワノ国',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャンクス',
    label: '四皇',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ナイトメア・ルフィ',
    label: '希望の星',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: 'ギア4／バウンドマン',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'アルベル',
    label: 'ルナーリア族',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヤマト',
    label: '大口真神',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: 'ギア4／スネイクマン',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シルバーズ・レイリー',
    label: 'ロジャー海賊団／副船長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'エドワード・ニューゲート',
    label: 'ロジャーの好敵手',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シルバーズ・レイリー',
    label: '海賊王の右腕 冥王',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '2年後／船長',
    label: 'モンキー・D・ルフィ',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'キッド&ロー',
    label: '鬼ヶ島怪物決戦',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヤマト',
    label: 'カイドウの息子',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トラファルガー・ロー',
    label: '死の外科医',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'サボ',
    label: 'ルフィの兄',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジュラキュール・ミホーク',
    label: '世界最強の剣士',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'カイドウ',
    label: '百獣海賊団／総督',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ウタ',
    label: '新時代の歌い手',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ユースタス・キッド',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ドンキホーテ・ドフラミンゴ',
    label: 'ドンキホーテ海賊団／船長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'クイーン',
    label: '百獣海賊団／大看板',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ベン・ベックマン',
    label: 'FILM RED',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ニコ・ロビン',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ロロノア・ゾロ',
    label: '2年後／戦闘員',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ブルック',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'うるティ',
    label: '百獣海賊団／飛び六砲',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'X・ドレーク',
    label: '機密特殊部隊「SWORD」隊長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'バギー',
    label: '王下七武海',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ゲッコー・モリア',
    label: '頂上戦争',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'スクラッチメン・アプー',
    label: 'オンエア海賊団／船長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヒナ',
    label: '海軍本部／少将',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ゾロ十郎',
    label: 'ワノ国',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トラファルガー・ロー',
    label: 'ハートの海賊団／船長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'マルコ',
    label: '白ひげ海賊団／一番隊隊長',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'フラの介',
    label: 'ワノ国',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トニートニー・チョッパー',
    label: '2年後／船医',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ペル',
    label: 'アラバスタ王国護衛隊副官',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ページワン',
    label: '百獣海賊団／飛び六砲',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: '頂上戦争',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'X・ドレーク',
    label: 'ワノ国',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジャック',
    label: '百獣海賊団／大看板',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'コラソン',
    label: 'ドンキホーテファミリー／幹部',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トニートニー・チョッパー',
    label: '腕力強化',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ゴール・D・ロジャー',
    label: '海賊王',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '【サカズキ】',
    label: '海軍本部／元帥　赤犬',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ウタ',
    label: 'FILM RED',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: 'ルフィ・ロー海賊同盟',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'カイドウ',
    label: '最強生物',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ポートガス・D・エース',
    label: '火拳',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: 'FILM RED',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '光月おでん',
    label: '九里大名',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'カイドウ',
    label: '鬼ヶ島怪物決戦',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: '海賊王を夢見る男',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'バギー',
    label: 'バギー海賊団／船長',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'マルコ',
    label: 'ワノ国',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ウソップ',
    label: '5tハンマー',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: 'STAMPEDE',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ボア・ハンコック',
    label: '九蛇海賊団／船長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'コビー',
    label: '海軍本部／曹長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モネ',
    label: 'ドンキホーテ海賊団／幹部',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ミス・ウェンズデー',
    label: 'BW／フロンティアエージェント',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ゲッコー・モリア',
    label: '王下七武海',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トラファルガー・ロー',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'バジル・ホーキンス',
    label: 'ワノ国',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シリュウ',
    label: '黒ひげ海賊団／元インペルダウン看守長',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'サンジ',
    label: '2年後／コック',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ナミ',
    label: '天候棒',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ユースタス・キッド',
    label: '新世界',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ボア・ハンコック',
    label: '王下七武海',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'そげキング',
    label: '狙撃の王様',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'バーソロミュー・くま',
    label: '王下七武海',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: 'ゴムゴムの暴風雨',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ウルージ',
    label: '破戒僧海賊団／船長 "怪僧"',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'クロコダイル',
    label: '王下七武海',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'カク',
    label: 'CP9',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ニコ・ロビン',
    label: '麦わらの一味／考古学者',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ブルック',
    label: '麦わらの一味／音楽家',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'クザン',
    label: '元海軍本部大将',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'おそばマスク',
    label: 'ステルス・ブラック',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'エンポリオ・イワンコフ',
    label: '革命軍',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'アルビダ',
    label: 'アルビダ海賊団／船長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トニートニー・チョッパー',
    label: '麦わらの一味／船医',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ガープ',
    label: '海軍の英雄',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'カラス',
    label: '革命軍／"北軍"軍隊長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヘルメッポ',
    label: '七光り',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: '3000万の賞金首',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャーロット・カタクリ',
    label: 'ビッグ・マム海賊団／スイート3将星',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'キラー',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'クイーン',
    label: '絡繰人間',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ビスタ',
    label: '白ひげ海賊団／5番隊隊長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'チュウ',
    label: 'アーロン一味／幹部',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'たしぎ',
    label: '海軍本部／曹長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ルフィ',
    label: '麦わらの一味／船長',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'フランキー将軍',
    label: '鉄の海賊',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'はっちゃん',
    label: 'アーロン一味／幹部',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ドン・クリーク',
    label: 'クリーク海賊団／船長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ゼフ',
    label: 'バラティエ／料理長',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'キャプテン・クロ',
    label: 'クロネコ海賊団／元船長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ロブ・ルッチ',
    label: 'CP0',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ギン',
    label: 'クリーク海賊団／戦闘総隊長',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '【クザン】',
    label: '海軍本部／大将 青雉',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'イゾウ',
    label: '元白ひげ海賊団／16番隊隊長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '【ボルサリーノ】',
    label: '海軍本部／大将 黄猿',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ロロノア・ゾロ',
    label: '一大・三千・大千・世界',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヴィンスモーク・ジャッジ',
    label: 'ジェルマ66／総帥',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トレーボル',
    label: 'ドンキホーテ海賊団／最高幹部',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'クロコダイル',
    label: '頂上戦争',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ナミ',
    label: 'ホールケーキアイランド',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'クンフージュゴン',
    label: '武闘派アニマル',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジンベエ',
    label: '王下七武海',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジーザス・バージェス',
    label: '黒ひげ海賊団／操舵手 "チャンピオン"',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャンクス',
    label: '赤髪海賊団／大頭',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ネコマムシ',
    label: '夜の王',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '菊之丞',
    label: 'ワノ国一の美少年剣士',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'キャロット',
    label: 'ミンク族',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トニートニー・チョッパー',
    label: 'ハッピーホリデー',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'バルトロメオ',
    label: 'バルトクラブ／船長',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ロブ・ルッチ',
    label: 'CP9',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'エネル',
    label: '神',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ウソップ',
    label: '2年後／狙撃手',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ミス・オールサンデー',
    label: 'BW／副社長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ペローナ',
    label: 'スリラーバーク海賊団／四怪人',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ニコ・ロビン',
    label: 'ハッピーホリデー',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'アーロン',
    label: 'アーロン一味／船長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ロロノア・ゾロ',
    label: '麦わらの一味／戦闘員',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'フランキー',
    label: '麦わらの一味／船大工',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'サンジ',
    label: '麦わらの一味／コック',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャーロット・プリン',
    label: 'ビッグ・マム海賊団／船員',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'サンジ',
    label: 'ホールケーキアイランド',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モーガン',
    label: '海軍大佐',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'Mr.2・ボン・クレー',
    label: 'BW／オフィサーエージェント',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジュエリー・ボニー',
    label: 'ボニー海賊団／船長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'カポネ・ベッジ',
    label: 'ファイアタンク海賊団／頭目',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'カバジ',
    label: 'バギー海賊団／参謀長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジャンゴ',
    label: 'クロネコ海賊団／船長',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'おロビ',
    label: 'ワノ国',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ウソップ',
    label: '麦わらの一味',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジョニー',
    label: '賞金稼ぎ',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヨサク',
    label: '賞金稼ぎ',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ブチ',
    label: 'クロネコ海賊団／船の番人',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヒグマ',
    label: '山賊／棟梁',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'センゴク',
    label: '海軍本部／元帥',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ボア・ハンコック',
    label: '水着',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ナミ',
    label: '麦わらの一味／航海士',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'コビー',
    label: '雑用',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'エリザベローⅡ世',
    label: 'プロデンス王国／国王',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'マーシャル・D・ティーチ',
    label: '王下七武海',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '【イッショウ】',
    label: '海軍本部／大将 藤虎',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ブルック',
    label: '2年後／音楽家',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'キャベンディッシュ',
    label: '美しき海賊団／船長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ユースタス・キッド',
    label: 'キッド海賊団／船長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '"ゴッド"ウソップ',
    label: '救世主',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ペドロ',
    label: 'くじらの森 侠客団／団長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャーロット・クラッカー',
    label: 'ビッグ・マム海賊団／スイート3将星',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヤソップ',
    label: 'FILM RED',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'キング',
    label: '百獣海賊団／大看板',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '黒炭カン十郎',
    label: '黒炭家の内通者',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'アルビダ',
    label: 'スベスベの実',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ササキ',
    label: '百獣海賊団／飛び六砲',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャーロット・プリン',
    label: '初めての共同作業',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'マゼラン',
    label: 'インペルダウン／監獄署長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャーロット・ペロスペロー',
    label: 'ビッグ・マム海賊団／船員',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャーロット・オーブン',
    label: 'ビッグ・マム海賊団／船員',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ナミ',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'サンジ',
    label: '仔羊肉ショット',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'クロオビ',
    label: 'アーロン一味／幹部',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ベロ・ベティ',
    label: '革命軍／"東軍"軍隊長',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ミス・ゴールデンウィーク',
    label: 'BW／オフィサーエージェント',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヒョウ五郎',
    label: 'ヒョウ五郎一家／大親分',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ロロノア・ゾロ',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'エネル',
    label: '雷神',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'サボ',
    label: '革命軍／参謀総長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '雷ぞう',
    label: '光月家／家臣',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ボア・ハンコック',
    label: 'STAMPEDE',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'リューマ',
    label: '伝説の侍',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'バンダー・デッケン九世',
    label: 'フライング海賊団／船長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ギルド・テゾーロ',
    label: 'FILM GOLD',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トニートニー・チョッパー',
    label: '怪物強化',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'サンジ',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ハクバ',
    label: 'ロンメルのカマイタチ',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ネフェルタリ・ビビ',
    label: 'アラバスタ王国／王女',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'エドワード・ニューゲート',
    label: '白ひげ海賊団／船長"白ひげ"',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャーロット・リンリン',
    label: 'ビッグ・マム海賊団／船長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'スモーカー',
    label: '海軍GL第5支部／中将',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャーロット・カタクリ',
    label: '超人',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ビビ&カルー',
    label: '王女と大切な相棒',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ディアマンテ',
    label: 'ドンキホーテ海賊団／最高幹部',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ポートガス・D・エース',
    label: '海賊王の息子',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シュガー',
    label: 'ドンキホーテ海賊団／特別幹部',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジョズ',
    label: '白ひげ海賊団／3番隊隊長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヴェルゴ',
    label: 'ドンキホーテ海賊団／最高幹部',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ウソ八',
    label: 'ワノ国',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '戦桃丸',
    label: '海軍本部／科学部隊隊長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '【サカズキ】',
    label: '海軍本部／大将 赤犬',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'Mr.3',
    label: 'BW／オフィサーエージェント',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ベラミー',
    label: 'ドレスローザの凶弾',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'フランキー',
    label: '2年後／船大工',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヴィンスモーク・レイジュ',
    label: 'ジェルマ66',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '河松',
    label: '光月家／家臣',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'イヌアラシ',
    label: '昼の王',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '居眠り狂死郎',
    label: '狂死郎一家／親分',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'アシュラ童子',
    label: '光月家／家臣',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'しのぶ',
    label: 'ベテランくの一',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'コアラ',
    label: '革命軍／幹部',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'おナミ',
    label: 'ワノ国',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トラファルガー・ロー',
    label: 'ワノ国',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'スモーカー（シャンブルズ）',
    label: 'パンクハザード',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ニコ・ロビン',
    label: '2年後／考古学者',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ペローナ',
    label: 'ゴーストプリンセス',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シーザー・クラウン',
    label: '元世界政府／科学班員',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ナミ',
    label: '2年後／航海士',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジュラキュール・ミホーク',
    label: '王下七武海',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ワポル',
    label: 'ドラム王国／元国王',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ネフェルタリ・ビビ',
    label: '孔雀スラッシャー',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ヤソップ',
    label: '赤髪海賊団／狙撃手',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'スモーカー',
    label: '海軍本部／大差',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ロロノア・ゾロ',
    label: '百八煩悩鳳',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'カヤ',
    label: 'シロップ村の少女',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ネプチューン',
    label: 'リュウグウ王国／国王',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ニコ・ロビン',
    label: 'エニエス・ロビー',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'サンジ',
    label: 'ロイヤルウェディング',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ブルック',
    label: 'ホールケーキアイランド',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '錦えもん',
    label: '光月家／家臣',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャーロット・ブリュレ',
    label: 'ビッグ・マム海賊団／船員',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ホーディ・ジョーンズ',
    label: '新魚人海賊団／船長',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジンベエ',
    label: 'ホールケーキアイランド',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ドンキホーテ・ドフラミンゴ',
    label: '王下七武海',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'セニョール・ピンク',
    label: 'ドンキホーテ海賊団／幹部',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ナミ',
    label: '水着',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ベビー5',
    label: 'ドンキホーテ海賊団／使用人兼殺し屋',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ポートガス・D・エース',
    label: '白ひげ海賊団／二番隊隊長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ダグラス・バレット',
    label: 'STAMPEDE',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シキ',
    label: 'FILM STRONG WORLD',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ジンベエ',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'チンジャオ',
    label: '元八宝水軍／第12代棟梁',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'フーズ・フー',
    label: '百獣海賊団／飛び六砲弾',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ウソップ',
    label: '鬼ヶ島討ち入り',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'Mr.2・ボン・クレー',
    label: 'インペルダウン／囚人',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'サボ',
    label: 'STAMPEDE',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'アディオ・スエルテ',
    label: 'ODYSSEY',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'クロコダイル',
    label: 'インペルダウン／囚人',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ガイモン',
    label: '森の番人',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'レベッカ',
    label: '無敗の女',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ベラミー',
    label: 'ベラミー海賊団／船長',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'チョパえもん',
    label: 'ワノ国',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: '花魁おリン',
    label: '鬼ヶ島怪物決戦',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'シャーロット・リンリン',
    label: '食いわずらい',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ゼファー',
    label: 'FILM Z',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'スモーカー',
    label: 'STAMPEDE',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ウソップ',
    label: 'FILM RED',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ナミ',
    label: 'FILM RED',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'トニートニー・チョッパー',
    label: 'FILM RED',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ハック',
    label: '革命軍／兵士',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'イデオ',
    label: 'XXX級ボクサー',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'カリブー',
    label: 'カリブー海賊団／船長',
    attributes: CharacterAttributes.RED,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'イナズマ',
    label: '革命軍／幹部',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ポートガス・D・エース',
    label: '海軍潜入',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ナミ',
    label: '囚われの花嫁',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'モンキー・D・ガープ',
    label: '海軍本部／中将',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.DEFENDER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'フランキー',
    label: 'ハッピーホリデー',
    attributes: CharacterAttributes.RED,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ロロノア・ゾロ',
    label: '一刀流「居合」獅子歌歌',
    attributes: CharacterAttributes.GREEN,
    type: CharacterType.ATTACKER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'キラー',
    label: 'キッド海賊団／戦闘員',
    attributes: CharacterAttributes.BLUE,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'ワイパー',
    label: 'シャンドラの戦士',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
  {
    name: 'たしぎ',
    label: '海軍GL第5支部／大佐',
    attributes: CharacterAttributes.RED,
    type: CharacterType.GETTER,
    boost: 0,
    status: {
      level: 0,
      totalScore: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0,
      charaBoost: 0,
    },
    skill: {
      skill1: {
        name: '赤髪の強襲',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      skill2: {
        name: 'グリフォンの刺突',
        effects: [
          {
            level: 1,
            effect: '',
          },
        ],
      },
      teamBoost: {
        name: '',
        effect: '',
      },
    },
    property: {
      characterFeature: [],
      feature1: [],
      feature2: [],
      boostFeature: [],
    },
    hasCharacter: false,
    userId: 0,
  },
];
