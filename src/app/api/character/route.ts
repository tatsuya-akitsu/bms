import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const character = await prisma.characterDetail.findUnique({
    where: {
      id: parseInt(req.nextUrl.searchParams.get('id')!),
    },
    include: {
      characterDetailTags: {
        include: {
          characterTag: true
        }
      }
    }
  });
  return NextResponse.json(character)
}
