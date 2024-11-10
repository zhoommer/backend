import { IsNumber, IsOptional } from 'class-validator';

export class UpdateProductMaterialDto {
  @IsNumber()
  @IsOptional()
  productId?: number;

  @IsNumber()
  @IsOptional()
  materialId?: number;

  @IsNumber()
  @IsOptional()
  quantityUsed?: number;
}
