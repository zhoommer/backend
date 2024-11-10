import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  // Find All Products
  async findAll() {
    return await this.prisma.product.findMany();
  }

  // Find One Product by ID
  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async createProductPlanning(productId: number, rawMaterialId: number) {
    const rawMaterial = await this.prisma.rawMaterial.findUnique({
      where: {
        id: rawMaterialId,
      },
    });

    const quantityUsed = await this.prisma.productMaterial.findFirst({
      where: {
        productId: productId,
        materialId: rawMaterialId,
      },
    });

    const producibleProductQuantity =
      rawMaterial.quantityInStock / quantityUsed.quantityUsed;

    return producibleProductQuantity;
  }

  async getCriticalStock() {
    const products = await this.prisma.product.findMany({
      where: {
        quantityInStock: {
          lte: this.prisma.product.fields.criticalStockLevel,
        },
      },
    });

    const materials = await this.prisma.rawMaterial.findMany({
      where: {
        quantityInStock: {
          lte: this.prisma.rawMaterial.fields.criticalStockLevel,
        },
      },
    });

    return {
      products: products,
      materials: materials,
    };
  }
}
