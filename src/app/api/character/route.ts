import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const character = await prisma.character.findUnique({
    where: {
      characterId: req.nextUrl.searchParams.get('id')!,
    },
    include: {
      status: {
        include: {
          skill: true,
          status: true
        }
      },
      tags: {
        include: {
          character: true,
        },
      },
    },
  });
  return NextResponse.json(character)
}
