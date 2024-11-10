import { IsNumber } from 'class-validator';

export class CreateProductMaterialDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  materialId: number;

  @IsNumber()
  quantityUsed: number;
}
