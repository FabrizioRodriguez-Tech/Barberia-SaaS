import { Module } from '@nestjs/common';
import { EmpresaController } from './empresa.controller.js';
import { EmpresaService } from './empresa.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [EmpresaController],
  providers: [EmpresaService],
})
export class EmpresaModule {}