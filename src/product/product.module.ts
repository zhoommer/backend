import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductMaterialModule } from 'src/product-material/product-material.module';

@Module({
  imports: [ProductMaterialModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
