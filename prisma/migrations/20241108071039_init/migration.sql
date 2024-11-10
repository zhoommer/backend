-- DropForeignKey
ALTER TABLE "ProductMaterial" DROP CONSTRAINT "ProductMaterial_productId_fkey";

-- AlterTable
ALTER TABLE "ProductMaterial" ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductMaterial" ADD CONSTRAINT "ProductMaterial_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
