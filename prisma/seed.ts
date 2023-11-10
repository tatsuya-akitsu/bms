// prisma/seed.ts
import { CharacterAttributes, CharacterType } from '@prisma/client';
import prisma from '../src/lib/prisma';

async function main() {
  const characters = [
    {
      name: 'シャンクス',
      label: 'FILM RED',
      attributes: CharacterAttributes.GREEN,
      type: CharacterType.ATTACKER,
      totalScore: 0,
      boost: 0,
    },
    {
      name: 'モンキー・D・ルフィ',
      label: 'ギア 5',
      attributes: CharacterAttributes.GREEN,
      type: CharacterType.DEFENDER,
      totalScore: 0,
      boost: 0,
    },
  ];

  for (const data of characters) {
    await prisma.character.create({ data });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
