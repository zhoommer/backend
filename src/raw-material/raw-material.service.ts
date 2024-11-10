import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';

@Injectable()
export class RawMaterialService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.rawMaterial.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.rawMaterial.findUnique({
      where: { id },
    });
  }

  async create(createRawMaterialDto: CreateRawMaterialDto) {
    try {
      return await this.prisma.rawMaterial.create({
        data: createRawMaterialDto,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
