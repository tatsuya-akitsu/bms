import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const characterId = parseInt(req.nextUrl.searchParams.get('id')!);
  const characterDetail = await prisma.character.findUnique({
    where: {
      id: characterId
    }
  })
  return NextResponse.json(characterDetail)
}
