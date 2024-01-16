-- CreateEnum
CREATE TYPE "CharacterType" AS ENUM ('ATTACKER', 'DEFENDER', 'GETTER');

-- CreateEnum
CREATE TYPE "CharacterAttributes" AS ENUM ('RED', 'BLUE', 'GREEN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Characters" (
    "id" INTEGER NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "type" "CharacterType" NOT NULL,
    "attributes" "CharacterAttributes" NOT NULL,
    "totalScore" INTEGER NOT NULL,
    "hasCharacter" BOOLEAN NOT NULL,
    "isMultipleType" BOOLEAN NOT NULL,
    "tagIds" INTEGER[],

    CONSTRAINT "Characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "statusId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterMaximum" (
    "id" TEXT NOT NULL,
    "statusId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "CharacterMaximum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterMaximumStatus" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "comprehensive" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "critical" DOUBLE PRECISION NOT NULL,
    "boost" INTEGER NOT NULL,

    CONSTRAINT "CharacterMaximumStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterMaximumSkill" (
    "id" TEXT NOT NULL,
    "skill1" INTEGER NOT NULL,
    "skill2" INTEGER NOT NULL,

    CONSTRAINT "CharacterMaximumSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterTag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActivation" BOOLEAN NOT NULL,
    "effect" JSONB NOT NULL,

    CONSTRAINT "CharacterTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterUserdata" (
    "id" TEXT NOT NULL,
    "statusId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CharacterUserdata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterUserdataStatus" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "comprehensive" INTEGER NOT NULL,
    "strength" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "critical" DOUBLE PRECISION NOT NULL,
    "boost" INTEGER NOT NULL,

    CONSTRAINT "CharacterUserdataStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterUserdataSkill" (
    "id" TEXT NOT NULL,
    "skill1" INTEGER NOT NULL,
    "skill2" INTEGER NOT NULL,

    CONSTRAINT "CharacterUserdataSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserCharacters" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToCharacterTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Characters_uniqueId_key" ON "Characters"("uniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_uniqueId_key" ON "Character"("uniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_characterId_key" ON "Character"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "_UserCharacters_AB_unique" ON "_UserCharacters"("A", "B");

-- CreateIndex
CREATE INDEX "_UserCharacters_B_index" ON "_UserCharacters"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToCharacterTag_AB_unique" ON "_CharacterToCharacterTag"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToCharacterTag_B_index" ON "_CharacterToCharacterTag"("B");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "CharacterMaximum"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Characters"("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMaximum" ADD CONSTRAINT "CharacterMaximum_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "CharacterMaximumStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterMaximum" ADD CONSTRAINT "CharacterMaximum_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "CharacterMaximumSkill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterUserdata" ADD CONSTRAINT "CharacterUserdata_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "CharacterUserdataStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterUserdata" ADD CONSTRAINT "CharacterUserdata_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "CharacterUserdataSkill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterUserdata" ADD CONSTRAINT "CharacterUserdata_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCharacters" ADD CONSTRAINT "_UserCharacters_A_fkey" FOREIGN KEY ("A") REFERENCES "Characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCharacters" ADD CONSTRAINT "_UserCharacters_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToCharacterTag" ADD CONSTRAINT "_CharacterToCharacterTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToCharacterTag" ADD CONSTRAINT "_CharacterToCharacterTag_B_fkey" FOREIGN KEY ("B") REFERENCES "CharacterTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
