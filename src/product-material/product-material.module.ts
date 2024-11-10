import { Module } from '@nestjs/common';
import { ProductMaterialService } from './product-material.service';
import { ProductMaterialController } from './product-material.controller';

@Module({
  providers: [ProductMaterialService],
  controllers: [ProductMaterialController],
  exports: [ProductMaterialService],
})
export class ProductMaterialModule {}
