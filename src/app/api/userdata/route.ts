import prisma from '@/lib/prisma';
import type { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  const { uid, id } = {
    uid: req.nextUrl.searchParams.get('uid')!,
    id: req.nextUrl.searchParams.get('id')!
  }

  const userdata = await prisma.characterUserdata.findMany({
    where: {
      id: id,
      userId: uid
    },
    include: {
      status: true,
      skill: true
    }
  })

  return NextResponse.json(userdata)
}
