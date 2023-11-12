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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterTags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActivation" BOOLEAN NOT NULL,
    "effect" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CharacterTags_pkey" PRIMARY KEY ("id")
);
