-- CreateEnum
CREATE TYPE "CharacterType" AS ENUM ('ATTACKER', 'DEFENDER', 'GETTER');

-- CreateEnum
CREATE TYPE "CharacterAttributes" AS ENUM ('RED', 'BLUE', 'GREEN');

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "type" "CharacterType" NOT NULL,
    "attributes" "CharacterAttributes" NOT NULL,
    "totalScore" INTEGER NOT NULL,
    "boost" INTEGER NOT NULL,
    "hasCharacter" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterDetail" (
    "id" SERIAL NOT NULL,
    "characterDetailId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "type" "CharacterType" NOT NULL,
    "attributes" "CharacterAttributes" NOT NULL,
    "totalScore" INTEGER NOT NULL,
    "boost" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CharacterDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActivation" BOOLEAN NOT NULL,
    "effect" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CharacterTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterToCharacterTag" (
    "characterId" INTEGER NOT NULL,
    "characterDetailId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "CharacterToCharacterTag_pkey" PRIMARY KEY ("characterId","characterDetailId","tagId")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterDetail" ADD CONSTRAINT "CharacterDetail_characterDetailId_fkey" FOREIGN KEY ("characterDetailId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterToCharacterTag" ADD CONSTRAINT "CharacterToCharacterTag_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterToCharacterTag" ADD CONSTRAINT "CharacterToCharacterTag_characterDetailId_fkey" FOREIGN KEY ("characterDetailId") REFERENCES "CharacterDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterToCharacterTag" ADD CONSTRAINT "CharacterToCharacterTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "CharacterTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
