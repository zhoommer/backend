import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductMaterialDto } from './dto/create-product-material.dto';
import { UpdateProductMaterialDto } from './dto/update-product-material.dto';

@Injectable()
export class ProductMaterialService {
  constructor(private prisma: PrismaService) {}

  // Create ProductMaterial (Ürün ve malzeme ilişkisi)
  async create(createProductMaterialDto: CreateProductMaterialDto) {
    return await this.prisma.productMaterial.create({
      data: createProductMaterialDto,
    });
  }

  // Find materials used by a product
  async findByProductId(productId: number) {
    return await this.prisma.productMaterial.findMany({
      where: { productId },
    });
  }

  // Find All ProductMaterials
  async findAll() {
    return await this.prisma.productMaterial.findMany();
  }

  // Find One ProductMaterial by ID
  async findOne(id: number) {
    return await this.prisma.productMaterial.findUnique({
      where: { id },
    });
  }

  // Update ProductMaterial
  async update(id: number, updateProductMaterialDto: UpdateProductMaterialDto) {
    return await this.prisma.productMaterial.update({
      where: { id },
      data: updateProductMaterialDto,
    });
  }

  // Delete ProductMaterial
  async remove(id: number) {
    return await this.prisma.productMaterial.delete({
      where: { id },
    });
  }
}
