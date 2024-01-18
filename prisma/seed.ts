import prisma from '../src/lib/prisma';
import { characterTags } from '../src/constants/character-tag';
import { characterMasterData } from '../src/constants/character';
import { initialUserId } from '../src/constants/index';

// 初期データとしてサンプルユーザーを登録
async function seedInitUser() {
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

// キャラクター一覧データの登録
async function seedCharacters() {
  characterMasterData.map(async (character, i) => {
    await prisma.characters.create({
      data: {
        id: i + 1,
        uniqueId: `${i + 1}_${character.attributes}_${character.type}`,
        name: character.name,
        label: character.label,
        type: character.type,
        attributes: character.attributes,
        totalScore: character.maximum.status.comprehensive,
        hasCharacter: character.hasCharacter,
        isMultipleType: character.isMultipleType,
        tagIds: character.tags,
      },
    });
  })
}

// 【最大値】キャラクターステータスの登録
async function seedCharacterMaximumStatus() {
  const status = characterMasterData.map((character, i) => {
    return {
      id: `${i + 1}_${character.attributes}_${character.type}`,
      ...character.maximum.status,
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
      id: `${i + 1}_${character.attributes}_${character.type}`,
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

// キャラクター詳細の登録
async function seedCharacter() {
  const maximumStatus = await prisma.characterMaximum.findMany()

  characterMasterData.map(async (character, i) => {
    await prisma.character.create({
      data: {
        id: `detail_${character.attributes}_${character.type}_${i + 1}`,
        uniqueId: `${i + 1}_${character.attributes}_${character.type}`,
        statusId: maximumStatus.filter(
          (status) =>
            status.id === `${i + 1}_${character.attributes}_${character.type}`
        )[0].id,
        characterId: `${i + 1}_${character.attributes}_${character.type}`,
      },
    });
  })
}

// キャラクタータグの登録
async function seedCharacterTag() {
  const characters = await prisma.characters.findMany()
  characterTags.forEach(async (tag, i) => {
    await prisma.characterTag.create({
      data: {
        id: `tag_${i + 1}`,
        ...tag
      }
    })
  })

  const characterTagsData = await prisma.characterTag.findMany()

  characterTagsData.map(async (tag, i) => {
    let containTagCharacters = characters.filter((character) => character.tagIds.includes(Number(tag.id.split('_')[1])))

    containTagCharacters.map(async (character) => {
      let getCharacter = await prisma.character.findMany({
        where: {
          characterId: character.uniqueId
        }
      })

      await prisma.characterTag.update({
        where: {
          id: tag.id
        },
        data: {
          character: {
            connect: getCharacter[0]
          }
        }
      })
    })
  })
}

// 【ユーザー別】キャラクターステータスの登録
async function seedCharacterUserStatus() {
  characterMasterData.map(async (character, i) => {
    await prisma.characterUserdataStatus.create({
      data: {
        id: `${i + 1}_${character.attributes}_${character.type}`,
        level: 0,
        comprehensive: 0,
        strength: 0,
        attack: 0,
        defense: 0,
        critical: 0.0,
        boost: 0,
      },
    });
  })
}

// 【ユーザー別】キャラクタースキルの登録
async function seedCharacterUserSkill() {
  characterMasterData.map(async (character, i) => {
    await prisma.characterUserdataSkill.create({
      data: {
        id: `${i + 1}_${character.attributes}_${character.type}`,
        skill1: 0,
        skill2: 0,
      },
    });
  })
}

// 【ユーザー別】キャラクター情報の登録
async function seedCharacterUserdata() {
  const statuses = await prisma.characterUserdataStatus.findMany()
  const skills = await prisma.characterUserdataSkill.findMany()

  statuses.map(async (status, i) => {
    await prisma.characterUserdata.create({
      data: {
        id: status.id,
        statusId: status.id,
        skillId: skills.filter((skill) => skill.id === status.id)[0].id,
        userId: initialUserId,
      },
    });
  })
}

/*
  @TODO: 以下の順番で個別にseedは実行していく
  1.
    seedInitUser
    seedCharacters
    seedCharacterMaximumStatus
    seedCharacterMaximumSkill
    seedCharacterMaximum
    seedCharacter
  2.
    seedCharacterTag
  @TODO: 以下の情報は初期データは不要
    seedCharacterUserStatus
    seedCharacterUserSkill
    seedCharacterUserdata
*/
async function main() {
  await seedInitUser()
  await seedCharacters()
  await seedCharacterMaximumStatus()
  await seedCharacterMaximumSkill()
  await seedCharacterMaximum()
  await seedCharacter()
  await seedCharacterTag()
  // await seedCharacterUserStatus()
  // await seedCharacterUserSkill()
  // await seedCharacterUserdata()
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
