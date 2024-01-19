import { pageSize } from '@/constants';
import prisma from '@/lib/prisma';
import type { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  const page = parseInt(req.nextUrl.searchParams.get('page')!) || 1
  const skip = (page - 1) * pageSize

  const filtering = req.nextUrl.searchParams.getAll('filtering') || []
  const value = req.nextUrl.searchParams.getAll('value') || []
  const sort = req.nextUrl.searchParams.get('sort')
  const order = req.nextUrl.searchParams.get('order')
  const uid = req.nextUrl.searchParams.get('uid')!

  let queryOptions: {
    skip: number;
    take: number;
    where?: { [key: string]: string };
    orderBy?: {
      character: {
        status: {
          status: {
            [key: string]: string;
          };
        };
      };
    };
    include: {
      character: {
        include: {
          status: {
            include: {
              status: boolean;
            };
          };
        };
      };
      users: {
        where: {
          id: string;
        };
      };
    };
  } = {
    skip,
    take: pageSize,
    include: {
      character: {
        include: {
          status: {
            include: {
              status: true,
            },
          },
        },
      },
      users: {
        where: {
          id: uid
        }
      }
    },
  };

  if (filtering && value && sort && order) {
    // 属性またはキャラタイプもしくはその両方と、ステータスのソートがある場合
    queryOptions.where = {};
    for (let i = 0; i < filtering.length; i++) {
      queryOptions.where[filtering[i]] = `${value[i]}`;
    }
    queryOptions.orderBy = {
      character: {
        status: {
          status: {
            [sort]: `${order}`,
          },
        },
      },
    };
  }

  if (filtering && value) {
    // 属性のみまたはキャラタイプのみもしくは属性とキャラタイプのみ
    queryOptions.where = {}
    for (let i = 0; i < filtering.length; i++) {
      queryOptions.where[filtering[i]] = `${value[i]}`
    }
  }

  if (sort && order) {
    // ステータスのソートのみ
    queryOptions.orderBy = {
      character: {
        status: {
          status: {
            [sort]: `${order}`,
          },
        },
      },
    };
  }

  const characters = await prisma.characters.findMany(queryOptions);
  return NextResponse.json(characters)
}

export async function PATCH(req: NextRequest, res: NextApiResponse) {
  const { id, uid } = {
    id: parseInt(req.nextUrl.searchParams.get('id')!),
    uid: req.nextUrl.searchParams.get('uid')!
  };
  const characters = await prisma.characters.update({
    where: {
      id: id
    },
    data: {
      users: {
        connect: {
          id: uid
        }
      }
    }
  })

  const targetCharacter = await prisma.characters.findMany({
    where: {
      id: id
    }
  })
  await prisma.characterUserdataStatus.create({
    data: {
      id: targetCharacter[0].uniqueId,
      level: 0,
      comprehensive: 0,
      strength: 0,
      attack: 0,
      defense: 0,
      critical: 0.0,
      boost: 0,
    },
  });
  await prisma.characterUserdataSkill.create({
    data: {
      id: targetCharacter[0].uniqueId,
      skill1: 0,
      skill2: 0,
    },
  });

  const statuses = await prisma.characterUserdataStatus.findMany({
    where: {
      id: targetCharacter[0].uniqueId
    }
  })
  const skills = await prisma.characterUserdataSkill.findMany({
    where: {
      id: targetCharacter[0].uniqueId
    }
  })
  await prisma.characterUserdata.create({
    data: {
      id: statuses[0].id,
      statusId: statuses[0].id,
      skillId: skills[0].id,
      userId: uid,
    },
  });

  return NextResponse.json(characters)
}
