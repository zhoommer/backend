import { Module } from '@nestjs/common';
import { InitializeService } from './initialize.service';
import { InitializeController } from './initialize.controller';

@Module({
  providers: [InitializeService],
  controllers: [InitializeController],
})
export class InitializeModule {}
