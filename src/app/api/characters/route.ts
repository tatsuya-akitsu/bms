import { pageSize } from '@/constants';
import prisma from '@/lib/prisma';
import type { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  const page = parseInt(req.nextUrl.searchParams.get('page')!) || 1
  const skip = (page - 1) * pageSize

  const order = req.nextUrl.searchParams.get('order')!
  const target = req.nextUrl.searchParams.get('target')
  const sort = req.nextUrl.searchParams.get('sort')

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

  if (target && order) {
    queryOptions.where = {
      [order]: `${target}`
    }
  }
  if (sort && order) {
    queryOptions.orderBy = {
      character: {
        status: {
          status: {
            [order]: `${sort}`,
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
