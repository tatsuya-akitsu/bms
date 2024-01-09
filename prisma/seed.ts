// prisma/seed.ts
import prisma from '../src/lib/prisma';
import { characterMasterData } from '../src/constants/character';
import { characterTags } from '../src/constants/character-tag';
import { initialUserId } from '../src/constants/index';
import { CharacterModelSeed, Character as CharacterModel, CharacterDetailModelSeed } from '../src/types';
import { Character, CharacterAttributes, CharacterType, Characters } from '@prisma/client';

// 初期データとしてサンプルユーザーを登録
async function seedUser() {
  await prisma.user.upsert({
    where: {
      email: 'sample@gmail.com',
    },
    update: {},
    create: {
      id: initialUserId,
      email: 'sample@gmail.com',
    },
  });
}

// キャラクター一覧データを登録
async function seedCharacters() {
  for (const [i, character] of characterMasterData.entries()) {
    await prisma.characters.create({
      data: {
        id: `${character.attributes}_${character.type}_0${i + 1}`,
        name: character.name,
        label: character.label,
        type: character.type,
        attributes: character.attributes,
        totalScore: character.maximum.status.comprehensive,
        hasCharacter: character.hasCharacter,
        isMultipleType: character.isMultipleType,
        users: {
          connect: {
            id: character.userId,
          },
        }
      }
    })
  }
}

// 【最大値】キャラクターステータスの登録
async function seedCharacterMaximumStatus() {
  const status = characterMasterData.map((character, i) => {
    return {
      id: `${character.attributes}_${character.type}_${i + 1}`,
      ...character.maximum.status
    };
  })
  await prisma.characterMaximumStatus.createMany({
    data: status
  })
}

// 【最大値】キャラクタースキルの登録
async function seedCharacterMaximumSkill() {
  const skills = characterMasterData.map((character, i) => {
    return {
      id: `${character.attributes}_${character.type}_${i + 1}`,
      ...character.maximum.skills,
    };
  })

  await prisma.characterMaximumSkill.createMany({
    data: skills
  })
}

// 【最大値】キャラクター情報の登録
async function seedCharacterMaximum() {
  const statuses = await prisma.characterMaximumStatus.findMany()
  const skills = await prisma.characterMaximumSkill.findMany()

  const maximum = statuses.map((status, i) => {
    return {
      id: status.id,
      statusId: status.id,
      skillId: skills.filter((skill) => skill.id === status.id)[0].id
    }
  })

  await prisma.characterMaximum.createMany({
    data: maximum
  })
}

// キャラクター一覧取得
async function getCharacters() {
  return prisma.characters.findMany();
}

// キャラクター詳細の登録
async function seedCharacter() {
  const maximumStatus = await prisma.characterMaximum.findMany()
  const characters = await getCharacters()

  for (const [i, character] of characters.entries()) {
    await prisma.character.create({
      data: {
        id: `detail_${character.attributes}_${character.type}_${i + 1}`,
        uniqueId: `${i + 1}_${character.attributes}_${character.type}`,
        statusId: maximumStatus.filter(
          (status) =>
            status.id === `${character.attributes}_${character.type}_${i + 1}`
        )[0].id,
        characterId: character.id,
      },
    });
  }
}

// キャラクタータグの登録
async function seedCharacterTags() {
  const characters = await getCharacters()
  characterTags.forEach(async (tag, i) => {
    await prisma.characterTag.create({
      data: {
        id: `tag_${i + 1}`,
        ...tag,
      }
    })
  })

  const characterTagsData = await prisma.characterTag.findMany()

  for (const [idx, character] of characterMasterData.entries()) {
    for (const [i, tag] of characterTagsData.entries()) {
      if (character.tags.includes(i + 1)) {
        let targetCharacter = characters.filter(
          (data) =>
            data.attributes === character.attributes &&
            data.label === character.label &&
            data.type === character.type
        )[0];
        let getCharacter = await prisma.character.findMany({
          where: {
            characterId: `${targetCharacter.attributes}_${
              targetCharacter.type
            }_0${idx + 1}`,
          },
        });
        await prisma.characterTag.update({
          where: {
            id: `tag_${i + 1}`,
          },
          data: {
            character: {
              connect: getCharacter,
            },
          },
        });
      }
    }
  }
}

// 【ユーザー別】キャラクターステータスの登録
async function seedCharacterUserStatus() {
  for (const [i, character] of characterMasterData.entries()) {
    await prisma.characterUserdataStatus.create({
      data: {
        id: `${character.attributes}_${character.type}_${i + 1}`,
        level: 0,
        comprehensive: 0,
        strength: 0,
        attack: 0,
        defense: 0,
        critical: 0.0,
        boost: 0,
      },
    });
  }
}

// 【ユーザー別】キャラクタースキルの登録
async function seedCharacterUserSkill() {
  for (const [i, character] of characterMasterData.entries()) {
    await prisma.characterUserdataSkill.create({
      data: {
        id: `${character.attributes}_${character.type}_${i + 1}`,
        skill1: 0,
        skill2: 0,
      },
    });
  }
}

// 【ユーザー別】キャラクター情報の登録
async function seedCharacterUserdata() {
  const statuses = await prisma.characterUserdataStatus.findMany()
  const skills = await prisma.characterUserdataStatus.findMany()

  for (const [i, status] of statuses.entries()) {
    await prisma.characterUserdata.create({
      data: {
        id: status.id,
        statusId: status.id,
        skillId: skills.filter((skill) => skill.id === status.id)[0].id,
        userId: initialUserId,
      },
    });
  }
}

async function main() {
  await seedUser()
  await seedCharacters()
  await seedCharacterMaximumStatus()
  await seedCharacterMaximumSkill()
  await seedCharacterMaximum()
  await seedCharacterTags()
  await seedCharacter()
  await seedCharacterUserStatus()
  await seedCharacterUserSkill()
  await seedCharacterUserdata()
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
