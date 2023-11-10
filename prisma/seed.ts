// prisma/seed.ts
import prisma from '../src/lib/prisma';
import { characters } from '../src/constants/index';

async function main() {
  for (const data of characters) {
    await prisma.character.create({ data });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
