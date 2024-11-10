import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { AtGuard } from 'src/common/guards';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/get-all')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AtGuard)
  findAll() {
    return this.productService.findAll();
  }

  @Get('/get-by-id/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AtGuard)
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Get('/get-critical-stock')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AtGuard)
  getCriticalStock() {
    return this.productService.getCriticalStock();
  }
}
