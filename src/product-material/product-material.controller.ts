import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProductMaterialService } from './product-material.service';
import { AtGuard } from 'src/common/guards';
import { CreateProductMaterialDto } from './dto/create-product-material.dto';

@Controller('product-material')
export class ProductMaterialController {
  constructor(private productMaterialService: ProductMaterialService) {}

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AtGuard)
  create(createProductMaterialDto: CreateProductMaterialDto) {
    return this.productMaterialService.create(createProductMaterialDto);
  }
}
