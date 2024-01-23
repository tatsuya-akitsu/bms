import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const character = await prisma.character.findUnique({
    where: {
      characterId: req.nextUrl.searchParams.get('id')!,
    },
    include: {
      characterData: {
        include: {
          users: {
            where: {
              id: req.nextUrl.searchParams.get('uid')!
            },
            select: {
              characterUserdata: {
                select: {
                  skill: true,
                  status: true
                }
              }
            }
          }
        }
      },
      status: {
        include: {
          skill: true,
          status: true
        }
      }
    },
  });
  return NextResponse.json(character)
}
