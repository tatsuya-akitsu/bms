import { Tag } from '@/types';

export const characterTags: Tag[] = [
  {
    name: 'アタッカー',
    isActivation: true,
    effect: [
      {
        level: 80,
        effect: '攻撃力が10増加する',
      },
      {
        level: 160,
        effect: '攻撃力が20増加する',
      },
      {
        level: 300,
        effect: '攻撃力が40増加する',
      },
      {
        level: 480,
        effect: '攻撃力が80増加する\nクリティカルで与えるダメージが3%増加する',
      },
      {
        level: 600,
        effect: '攻撃力が200増加する\nクリティカルで与えるダメージが5%増加する',
      },
    ],
  },
  {
    name: '赤髪海賊団',
    isActivation: false,
    effect: [],
  },
  {
    name: '船長',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect:
          '体力が50%以下のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃でよろけるのを10%の確率で防ぐ',
      },
      {
        level: 240,
        effect:
          '体力が50%以下のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃でよろけるのを30%の確率で防ぐ',
      },
      {
        level: 400,
        effect:
          '体力が50%以下のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃でよろけるのを80%の確率で防ぐ',
      },
      {
        level: 500,
        effect:
          '体力が50%以下のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃でよろけるのを100%の確率で防ぐ\n体力が30%以下のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃で受けるダメージが10%減少する',
      },
      {
        level: 600,
        effect:
          '体力が50%以下のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃でよろけるのを100%の確率で防ぐ\n体力が30%以下のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃で受けるダメージが20%減少する',
      },
    ],
  },
  {
    name: '新世界',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が50%以下のとき、苦手属性の敵に与えるダメージが2%増加する',
      },
      {
        level: 240,
        effect: '体力が50%以下のとき、苦手属性の敵に与えるダメージが4%増加する',
      },
      {
        level: 400,
        effect:
          '体力が50%以下のとき、苦手属性の敵に与えるダメージが10%増加する',
      },
      {
        level: 500,
        effect:
          '体力が50%以下のとき、苦手属性の敵に与えるダメージが15%増加する',
      },
      {
        level: 600,
        effect:
          '体力が50%以下のとき、苦手属性の敵に与えるダメージが15%増加する',
      },
    ],
  },
  {
    name: 'ロジャー海賊団／元ロジャー海賊団',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect:
          '体力が50%以下のとき、敵から付与される状態異常の効果時間を2%短縮する',
      },
      {
        level: 240,
        effect:
          '体力が50%以下のとき、敵から付与される状態異常の効果時間を4%短縮する',
      },
      {
        level: 400,
        effect:
          '体力が50%以下のとき、敵から付与される状態異常の効果時間を10%短縮する',
      },
      {
        level: 500,
        effect:
          '体力が50%以下のとき、敵から付与される状態異常の効果時間を15%短縮する',
      },
      {
        level: 600,
        effect:
          '体力が50%以下のとき、敵から付与される状態異常の効果時間を30%短縮する',
      },
    ],
  },
  {
    name: 'ディフェンダー',
    isActivation: true,
    effect: [
      {
        level: 80,
        effect: '防御力が10増加する',
      },
      {
        level: 160,
        effect: '防御力が20増加する',
      },
      {
        level: 300,
        effect: '防御力が40増加する',
      },
      {
        level: 480,
        effect: '防御力が80増加する\nお宝ゲージの回復速度が5%増加する',
      },
      {
        level: 600,
        effect: '防御力が200増加する\nお宝ゲージの回復速度が10%増加する',
      },
    ],
  },
  {
    name: '麦わらの一味',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が50%以下のとき、クリティカルで受けるダメージが4%減少する',
      },
      {
        level: 240,
        effect: '体力が50%以下のとき、クリティカルで受けるダメージが8%減少する',
      },
      {
        level: 400,
        effect:
          '体力が50%以下のとき、クリティカルで受けるダメージが20%減少する',
      },
      {
        level: 500,
        effect:
          '体力が50%以下のとき、クリティカルで受けるダメージが30%減少する',
      },
      {
        level: 600,
        effect: 'クリティカルで受けるダメージが30%減少する',
      },
    ],
  },
  {
    name: '動物系能力者',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect:
          '体力が50%以下のとき、苦手属性の敵から受けるダメージが2%減少する',
      },
      {
        level: 240,
        effect:
          '体力が50%以下のとき、苦手属性の敵から受けるダメージが4%減少する',
      },
      {
        level: 400,
        effect:
          '体力が50%以下のとき、苦手属性の敵から受けるダメージが10%減少する',
      },
      {
        level: 500,
        effect:
          '体力が50%以下のとき、苦手属性の敵から受けるダメージが15%減少する',
      },
      {
        level: 600,
        effect: '苦手属性の敵から受けるダメージが15%減少する',
      },
    ],
  },
  {
    name: '能力者',
    isActivation: false,
    effect: [],
  },
  {
    name: '最悪の世代',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '敵チームのお宝エリアにいるとき、ふっとばしの距離が3%増加する',
      },
      {
        level: 240,
        effect: '敵チームのお宝エリアにいるとき、ふっとばしの距離が5%増加する',
      },
      {
        level: 400,
        effect: '敵チームのお宝エリアにいるとき、ふっとばしの距離が10%増加する',
      },
      {
        level: 500,
        effect: '敵チームのお宝エリアにいるとき、ふっとばしの距離が20%増加する',
      },
      {
        level: 600,
        effect:
          '敵チームのお宝エリアにいるとき、ふっとばしの距離が30%増加する\n自チームのお宝エリアにいるとき、ふっとばしの距離が30%増加する',
      },
    ],
  },
  {
    name: '超人系能力者',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が50%以下のとき、クリティカルで与えるダメージが1%増加する',
      },
      {
        level: 240,
        effect: '体力が50%以下のとき、クリティカルで与えるダメージが3%増加する',
      },
      {
        level: 400,
        effect: '体力が50%以下のとき、クリティカルで与えるダメージが6%増加する',
      },
      {
        level: 500,
        effect:
          '体力が50%以下のとき、クリティカルで与えるダメージが10%増加する',
      },
      {
        level: 600,
        effect:
          '体力が50%以下のとき、クリティカルで与えるダメージが20%増加する',
      },
    ],
  },
  {
    name: '遠距離通常攻撃',
    isActivation: true,
    effect: [],
  },
  {
    name: 'グランドライン',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect:
          '体力が50%以下のとき、同じ属性の敵から受けるダメージが2%減少する',
      },
      {
        level: 240,
        effect:
          '体力が50%以下のとき、同じ属性の敵から受けるダメージが4%減少する',
      },
      {
        level: 400,
        effect:
          '体力が50%以下のとき、同じ属性の敵から受けるダメージが10%減少する',
      },
      {
        level: 500,
        effect:
          '体力が50%以下のとき、同じ属性の敵から受けるダメージが15%減少する',
      },
      {
        level: 600,
        effect: '同じ属性の敵から受けるダメージが15%減少する',
      },
    ],
  },
  {
    name: '百獣海賊団',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が70%以上のとき、通常攻撃で与えるダメージが1%増加する',
      },
      {
        level: 240,
        effect: '体力が70%以上のとき、通常攻撃で与えるダメージが3%増加する',
      },
      {
        level: 400,
        effect: '体力が70%以上のとき、通常攻撃で与えるダメージが6%増加する',
      },
      {
        level: 500,
        effect: '体力が70%以上のとき、通常攻撃で与えるダメージが10%増加する',
      },
      {
        level: 600,
        effect: '体力が70%以上のとき、通常攻撃で与えるダメージが15%増加する',
      },
    ],
  },
  {
    name: 'ゲッター',
    isActivation: true,
    effect: [
      {
        level: 80,
        effect: '体力が40増加する',
      },
      {
        level: 160,
        effect: '体力が80増加する',
      },
      {
        level: 300,
        effect: '体力が160増加する',
      },
      {
        level: 480,
        effect:
          '体力が320増加する\n自分がお宝を奪取したときのお宝ゲージの初期値が10%増加する',
      },
      {
        level: 600,
        effect:
          '体力が800増加する\n自分がお宝を奪取したときのお宝ゲージの初期値が30%増加する',
      },
    ],
  },
  {
    name: '白ひげ海賊団',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が50%以下のとき、状態異常付与時の効果時間を2%延長する',
      },
      {
        level: 240,
        effect: '体力が50%以下のとき、状態異常付与時の効果時間を4%延長する',
      },
      {
        level: 400,
        effect: '体力が50%以下のとき、状態異常付与時の効果時間を10%延長する',
      },
      {
        level: 500,
        effect: '体力が50%以下のとき、状態異常付与時の効果時間を15%延長する',
      },
      {
        level: 600,
        effect: '体力が50%以下のとき、状態異常付与時の効果時間を30%延長する',
      },
    ],
  },
  {
    name: '王下七武海',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が50%以上のとき、状態異常付与時の効果時間を2%延長する',
      },
      {
        level: 240,
        effect: '体力が50%以上のとき、状態異常付与時の効果時間を4%延長する',
      },
      {
        level: 400,
        effect: '体力が50%以上のとき、状態異常付与時の効果時間を10%延長する',
      },
      {
        level: 500,
        effect: '体力が50%以上のとき、状態異常付与時の効果時間を15%延長する',
      },
      {
        level: 600,
        effect: '体力が50%以上のとき、状態異常付与時の効果時間を30%延長する',
      },
    ],
  },
  {
    name: '革命軍',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が70%以上のとき、ふっとばされる距離が10%減少する',
      },
      {
        level: 240,
        effect: '体力が70%以上のとき、ふっとばされる距離が20%減少する',
      },
      {
        level: 400,
        effect: '体力が70%以上のとき、ふっとばされる距離が30%減少する',
      },
      {
        level: 500,
        effect: '体力が70%以上のとき、ふっとばされる距離が40%減少する',
      },
      {
        level: 600,
        effect: '体力が70%以上のとき、ふっとばされる距離が60%減少する',
      },
    ],
  },
  {
    name: '自然系能力者',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect:
          '体力が50%以上のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃でよろけるのを20%の確率で防ぐ',
      },
      {
        level: 240,
        effect:
          '体力が50%以上のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃でよろけるのを60%の確率で防ぐ',
      },
      {
        level: 400,
        effect:
          '体力が50%以上のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃でよろけるのを100%の確率で防ぐ',
      },
      {
        level: 500,
        effect:
          '体力が50%以上のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃でよろけるのを100%の確率で防ぐ\n体力が70%以上のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃で受けるダメージが20%減少する',
      },
      {
        level: 600,
        effect:
          '体力が50%以上のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃でよろけるのを100%の確率で防ぐ\n体力が70%以上のとき、キャラタイプ「遠距離通常攻撃」のキャラの通常攻撃で受けるダメージが50%減少する',
      },
    ],
  },
  {
    name: 'ドンキホーテファミリー',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が50%以下のとき、通常攻撃で与えるダメージが1%増加する',
      },
      {
        level: 240,
        effect: '体力が50%以下のとき、通常攻撃で与えるダメージが3%増加する',
      },
      {
        level: 400,
        effect: '体力が50%以下のとき、通常攻撃で与えるダメージが6%増加する',
      },
      {
        level: 500,
        effect: '体力が50%以下のとき、通常攻撃で与えるダメージが10%増加する',
      },
      {
        level: 600,
        effect: '体力が50%以下のとき、通常攻撃で与えるダメージが15%増加する',
      },
    ],
  },
  {
    name: '海軍',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect:
          '自チームのお宝エリアにいるとき、ふっとばされる距離が10%減少する',
      },
      {
        level: 240,
        effect:
          '自チームのお宝エリアにいるとき、ふっとばされる距離が20%減少する',
      },
      {
        level: 400,
        effect:
          '自チームのお宝エリアにいるとき、ふっとばされる距離が30%減少する',
      },
      {
        level: 500,
        effect:
          '自チームのお宝エリアにいるとき、ふっとばされる距離が40%減少する',
      },
      {
        level: 600,
        effect:
          '自チームのお宝エリアにいるとき、ふっとばされる距離が60%減少する',
      },
    ],
  },
  {
    name: 'バギーズデリバリー',
    isActivation: false,
    effect: [],
  },
  {
    name: 'アラバスタ王国',
    isActivation: false,
    effect: [],
  },
  {
    name: '魚人',
    isActivation: true,
    effect: [
      {
        level: 80,
        effect:
          '敵チームのお宝エリアにいるとき、ふっとばされる距離が10%減少する',
      },
      {
        level: 160,
        effect:
          '敵チームのお宝エリアにいるとき、ふっとばされる距離が20%減少する',
      },
    ],
  },
  {
    name: '光月家／光月家　家臣',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が50%以下のとき、通常攻撃で受けるダメージが1%減少する',
      },
      {
        level: 240,
        effect: '体力が50%以下のとき、通常攻撃で受けるダメージが3%減少する',
      },
      {
        level: 400,
        effect: '体力が50%以下のとき、通常攻撃で受けるダメージが6%減少する',
      },
      {
        level: 500,
        effect: '体力が50%以下のとき、通常攻撃で受けるダメージが10%減少する',
      },
      {
        level: 600,
        effect: '体力が50%以下のとき、通常攻撃で受けるダメージが15%減少する',
      },
    ],
  },
  {
    name: '東の海',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が50%以下のとき、同じ属性の敵に与えるダメージが2%増加する',
      },
      {
        level: 240,
        effect: '体力が50%以下のとき、同じ属性の敵に与えるダメージが4%増加する',
      },
      {
        level: 400,
        effect:
          '体力が50%以下のとき、同じ属性の敵に与えるダメージが10%増加する',
      },
      {
        level: 500,
        effect:
          '体力が50%以下のとき、同じ属性の敵に与えるダメージが15%増加する',
      },
      {
        level: 600,
        effect: '同じ属性の的に与えるダメージが15%増加する',
      },
    ],
  },
  {
    name: '九蛇海賊団',
    isActivation: false,
    effect: [],
  },
  {
    name: 'バロックワークス',
    isActivation: false,
    effect: [],
  },
  {
    name: '黒ひげ海賊団',
    isActivation: false,
    effect: [],
  },
  {
    name: 'サイファーポール',
    isActivation: false,
    effect: [],
  },
  {
    name: 'シャーロット家',
    isActivation: true,
    effect: [
      {
        level: 180,
        effect: '体力が70%以上のとき、通常攻撃で受けるダメージが1%減少する',
      },
      {
        level: 240,
        effect: '体力が70%以上のとき、通常攻撃で受けるダメージが3%減少する',
      },
      {
        level: 400,
        effect: '体力が70%以上のとき、通常攻撃で受けるダメージが6%減少する',
      },
      {
        level: 500,
        effect: '体力が70%以上のとき、通常攻撃で受けるダメージが10%減少する',
      },
      {
        level: 600,
        effect: '体力が70%以上のとき、通常攻撃で受けるダメージが15%減少する',
      },
    ],
  },
  {
    name: 'ジェルマ66',
    isActivation: false,
    effect: [],
  },
  {
    name: 'ミンク族',
    isActivation: false,
    effect: [],
  },
  {
    name: '忍者',
    isActivation: false,
    effect: []
  },
  {
    name: 'シャンブルズ',
    isActivation: false,
    effect: []
  }
];
