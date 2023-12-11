import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  const page = parseInt(req.nextUrl.searchParams.get('page')!) || 1
  const pageSize = 20
  const skip = (page - 1) * pageSize
  const characters = await prisma.character.findMany({
    skip,
    take: pageSize
  })
  return NextResponse.json(characters)
}
