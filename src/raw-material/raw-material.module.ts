import { Module } from '@nestjs/common';
import { RawMaterialService } from './raw-material.service';
import { RawMaterialController } from './raw-material.controller';

@Module({
  providers: [RawMaterialService],
  controllers: [RawMaterialController]
})
export class RawMaterialModule {}
