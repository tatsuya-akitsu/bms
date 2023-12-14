import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const characterId = parseInt(req.nextUrl.searchParams.get('id')!);
  console.log(req.nextUrl.searchParams.get('id')!, 'これは何が来てる…？')
  const characterDetail = await prisma.character.findUnique({
    where: {
      id: characterId
    }
  })
  return NextResponse.json(characterDetail)
}
