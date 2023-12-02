// prisma/seed.ts
import prisma from '../src/lib/prisma';
import { characterMasterData } from '../src/constants/character';
import { characterTags } from '../src/constants/character-tag';
import { CharacterModelSeed } from '../src/types';
import { Character } from '@prisma/client';

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
  const charactersData = characterMasterData.map((character: CharacterModelSeed) => {
    return {
      name: character.name,
      label: character.label,
      attributes: character.attributes,
      type: character.type,
      hasCharacter: character.hasCharacter,
      userId: character.userId
    }
  })
  await prisma.character.createMany({
    data: charactersData,
  });
}

async function getCharacters() {
  return prisma.character.findMany();
}

async function getCharacterTags() {
  return prisma.characterTag.findMany();
}

function createInitialCharacterDetail(character: Character) {
  const characterData = characterMasterData.filter((item) => item.name === character.name && item.label === character.label && item.type === character.type);
  return {
    maximum: JSON.stringify(characterData[0].maximum),
    characterId: character.id,
  };
}

async function seedCharacterDetail() {
  const characters = await getCharacters();
  const characterDetailPromises = characters.map((character) => {
    const characterDetailData = createInitialCharacterDetail(character);
    return prisma.characterDetail.create({
      data: characterDetailData,
    });
  });

  await prisma.$transaction(characterDetailPromises);
}

async function getCharacterDetails() {
  return prisma.characterDetail.findMany();
}

async function seedUserCharacterDetail() {
  const characters = await getCharacters();
  const characterDetails = await getCharacterDetails();

  const userCharacterDetailPromises = characters.map((character) => {
    const characterDetailId = characterDetails.filter(
      (item) => item.characterId === character.id
    )[0].id;

    return prisma.userCharacterDetail.upsert({
      where: {
        userId_characterDetailId: {
          userId: character.userId,
          characterDetailId: characterDetailId,
        },
      },
      update: {},
      create: {
        userId: character.userId,
        characterDetailId,
        userdata: JSON.stringify({
          status: {
            level: 60,
            comprehensive: 0,
            strength: 0,
            attack: 0,
            defense: 0,
            critical: 0,
            boost: 0,
            medals: {
              comprehensive: 0,
              strength: 0,
              attack: 0,
              defense: 0,
            },
          },
          skills: {
            skill1: 1,
            skill2: 1,
          },
        }),
      },
    });
  })

  await prisma.$transaction(userCharacterDetailPromises);
}

async function seedCharacterDetailTag() {
  const characters = await getCharacters();
  const characterDetails = await getCharacterDetails();

  const characterDetailTagPromises = characters.flatMap((character) => {
    const characterDetail = characterDetails.filter(
      (item) => item.characterId === character.id
    )[0];
    const characterTags = characterMasterData
      .filter(
        (item) => item.name === character.name && item.label === character.label
      )
      .flatMap((item) => item.tags);

    return characterTags.map((tagId) => {
      return prisma.characterDetailTag.create({
        data: {
          characterDetailId: characterDetail.id,
          characterTagId: tagId,
        },
      });
    })
  })

  await prisma.$transaction(characterDetailTagPromises);
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
  await seedCharacterDetail()
  await seedUserCharacterDetail()
  await seedCharacterDetailTag()
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
