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

-- Characterテーブルに初期データを挿入
INSERT INTO "Character"
    ("name", "label", "type", "attributes", "totalScore", "boost")
VALUES
    ('シャンクス', 'FILM RED', 'GREEN', 'ATTACKER', 0, 0),
    ('モンキー・D・ルフィ', 'ギア 5', 'GREEN', 'DEFENDER', 0, 1);

-- CharacterTagsテーブルに初期データを挿入
INSERT INTO "CharacterTags"
    ("name", "isActivation", "effect")
VALUES
    ('Tag 1', true, '{"effect1": "value1"}'),
    ('Tag 2', false, '{"effect2": "value2"}'),
    ('Tag 3', true, '{"effect3": "value3"}');
