import { pageSize } from '@/constants';
import prisma from '@/lib/prisma';
import type { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  const page = parseInt(req.nextUrl.searchParams.get('page')!) || 1
  const skip = (page - 1) * pageSize
  const characters = await prisma.character.findMany({
    orderBy: [
      {
        type: 'desc'
      }
    ],
    skip,
    take: pageSize
  })
  return NextResponse.json(characters)
}

export async function PATCH(req: NextRequest, res: NextApiResponse) {
  const { id, hasCharacter } = {
    id: parseInt(req.nextUrl.searchParams.get('id')!),
    hasCharacter: req.nextUrl.searchParams.get('hasCharacter')!,
  };
  const isHas = hasCharacter === 'true' ? true : false
  const characters = await prisma.character.update({
    where: {
      id: id
    },
    data: {
      hasCharacter: isHas,
    }
  })
  return NextResponse.json(characters)
}
