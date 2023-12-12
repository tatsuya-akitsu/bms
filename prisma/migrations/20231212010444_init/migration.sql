-- CreateEnum
CREATE TYPE "CharacterType" AS ENUM ('ATTACKER', 'DEFENDER', 'GETTER');

-- CreateEnum
CREATE TYPE "CharacterAttributes" AS ENUM ('RED', 'BLUE', 'GREEN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "type" "CharacterType" NOT NULL,
    "attributes" "CharacterAttributes" NOT NULL,
    "totalScore" INTEGER NOT NULL,
    "hasCharacter" BOOLEAN NOT NULL,
    "isMultipleType" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterDetail" (
    "id" SERIAL NOT NULL,
    "maximum" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "characterId" INTEGER NOT NULL,

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
CREATE TABLE "UserCharacterDetail" (
    "userId" INTEGER NOT NULL,
    "characterDetailId" INTEGER NOT NULL,
    "userdata" JSONB NOT NULL,

    CONSTRAINT "UserCharacterDetail_pkey" PRIMARY KEY ("userId","characterDetailId")
);

-- CreateTable
CREATE TABLE "CharacterDetailTag" (
    "characterDetailId" INTEGER NOT NULL,
    "characterTagId" INTEGER NOT NULL,

    CONSTRAINT "CharacterDetailTag_pkey" PRIMARY KEY ("characterDetailId","characterTagId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterDetail" ADD CONSTRAINT "CharacterDetail_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCharacterDetail" ADD CONSTRAINT "UserCharacterDetail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCharacterDetail" ADD CONSTRAINT "UserCharacterDetail_characterDetailId_fkey" FOREIGN KEY ("characterDetailId") REFERENCES "CharacterDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterDetailTag" ADD CONSTRAINT "CharacterDetailTag_characterDetailId_fkey" FOREIGN KEY ("characterDetailId") REFERENCES "CharacterDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterDetailTag" ADD CONSTRAINT "CharacterDetailTag_characterTagId_fkey" FOREIGN KEY ("characterTagId") REFERENCES "CharacterTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
