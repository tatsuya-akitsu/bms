// prisma/seed.ts
import prisma from '../src/lib/prisma';
import { characters } from '../src/constants/index';

async function main() {
  await prisma.character.createMany({
    data: characters,
    skipDuplicates: true,
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
