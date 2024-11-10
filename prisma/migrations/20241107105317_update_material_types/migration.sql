/*
  Warnings:

  - The values [STEEL,ALUMINUM,COPPER,PLASTIC,RUBBER,OTHER] on the enum `MaterialType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MaterialType_new" AS ENUM ('CELIK', 'ALUMINYUM', 'BAKIR', 'PLASTIK', 'LASTIK', 'KAPLAMA');
ALTER TABLE "RawMaterial" ALTER COLUMN "materialType" TYPE "MaterialType_new" USING ("materialType"::text::"MaterialType_new");
ALTER TYPE "MaterialType" RENAME TO "MaterialType_old";
ALTER TYPE "MaterialType_new" RENAME TO "MaterialType";
DROP TYPE "MaterialType_old";
COMMIT;
