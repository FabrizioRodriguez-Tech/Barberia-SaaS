import { Module } from '@nestjs/common';
import { SucursalController } from './sucursal.controller.js';
import { SucursalService } from './sucursal.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [SucursalController],
  providers: [SucursalService],
})
export class SucursalModule {}