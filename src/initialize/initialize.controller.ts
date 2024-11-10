import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { InitializeService } from './initialize.service';
import { GetCurrentUserId } from 'src/common/decorators';

@Controller('initialize')
export class InitializeController {
  constructor(private initializeService: InitializeService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  initialize(@GetCurrentUserId() userId: number): Promise<any> {
    return this.initializeService.initialize(userId);
  }
}
