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

  let queryOptions: {
    skip: number;
    take: number;
    where?: { [key: string]: string };
    orderBy?: {
      character: {
        status: {
          status: {
            [key: string]: string
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
  const { id, hasCharacter } = {
    id: parseInt(req.nextUrl.searchParams.get('id')!),
    hasCharacter: req.nextUrl.searchParams.get('hasCharacter')!,
  };
  const isHas = hasCharacter === 'true' ? true : false
  const characters = await prisma.characters.update({
    where: {
      id: id
    },
    data: {
      hasCharacter: isHas,
    }
  })
  return NextResponse.json(characters)
}
