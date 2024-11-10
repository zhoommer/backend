import { IsEnum, IsNumber, IsString } from 'class-validator';
import { MaterialType } from '../enums/material-type.enum';
import { Unit } from '../enums/unit.enum';

export class CreateRawMaterialDto {
  @IsString()
  name: string;

  @IsEnum(MaterialType)
  materialType: MaterialType;

  @IsEnum(Unit)
  unit: Unit;

  @IsNumber()
  quantityInStock: number;

  @IsNumber()
  pricePerUnit: number;

  @IsString()
  supplier: string;

  @IsNumber()
  criticalStockLevel: number;
}
