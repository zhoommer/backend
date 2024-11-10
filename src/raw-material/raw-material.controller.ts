import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RawMaterialService } from './raw-material.service';
import { AtGuard } from 'src/common/guards';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';

@Controller('raw-material')
export class RawMaterialController {
  constructor(private rawMaterialService: RawMaterialService) {}

  @Get('/get-all')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AtGuard)
  findAll() {
    return this.rawMaterialService.findAll();
  }

  @Get('/get-by-id/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AtGuard)
  findOne(@Param('id') id: number) {
    return this.rawMaterialService.findOne(id);
  }

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AtGuard)
  create(@Body() createRawMaterialDto: CreateRawMaterialDto) {
    return this.rawMaterialService.create(createRawMaterialDto);
  }
}
