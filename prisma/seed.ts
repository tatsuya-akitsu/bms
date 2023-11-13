// prisma/seed.ts
import prisma from '../src/lib/prisma';
import { characters } from '../src/constants/character';
import { characterTags } from '../src/constants/character-tag';
import { Characters, CharactersSeed } from '../src/types';

async function seedUser() {
  await prisma.user.upsert({
    where: {
      email: 'sample@gmail.com',
    },
    update: {},
    create: {
      id: 0,
      email: 'sample@gmail.com',
    },
  });
}

async function seedCharacter() {
  const charactersData: Array<CharactersSeed> = characters.map((character: Characters) => {
    return {
      name: character.name,
      label: character.label,
      attributes: character.attributes,
      type: character.type,
      totalScore: character.status.totalScore,
      boost: character.boost,
      hasCharacter: character.hasCharacter,
      userId: character.userId
    }
  })
  await prisma.character.createMany({
    data: charactersData,
  });
}

async function seedCharacterTag() {
  await prisma.characterTag.createMany({
    data: characterTags,
  });
}

async function main() {
  await seedUser()
  await seedCharacter()
  await seedCharacterTag()
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
