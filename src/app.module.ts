import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { JwtModule } from '@nestjs/jwt';
import { InitializeModule } from './initialize/initialize.module';
import { ProductModule } from './product/product.module';
import { RawMaterialModule } from './raw-material/raw-material.module';
import { ProductMaterialModule } from './product-material/product-material.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    AuthModule,
    PrismaModule,
    JwtModule,
    InitializeModule,
    ProductModule,
    RawMaterialModule,
    ProductMaterialModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    AuthService,
  ],
})
export class AppModule {}
