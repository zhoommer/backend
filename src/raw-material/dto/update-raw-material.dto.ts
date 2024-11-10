import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { MaterialType } from '../enums/material-type.enum';
import { Unit } from '../enums/unit.enum';

export class UpdateRawMaterialDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEnum(MaterialType)
  @IsOptional()
  materialType?: MaterialType;

  @IsEnum(Unit)
  @IsOptional()
  unit?: Unit;

  @IsNumber()
  @IsOptional()
  quantityInStock?: number;

  @IsNumber()
  @IsOptional()
  pricePerUnit?: number;

  @IsString()
  @IsOptional()
  supplier?: string;

  @IsNumber()
  @IsOptional()
  criticalStockLevel?: number;
}
