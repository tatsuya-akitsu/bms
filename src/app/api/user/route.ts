import { characterMasterData } from "@/constants/character";
import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, res: NextApiResponse) {
  const { uid, data } = await req.json();

  const user = await prisma.user.upsert({
    where: {
      id: uid,
    },
    update: {},
    create: {
      ...data,
    },
  });

  return NextResponse.json(user);
}
