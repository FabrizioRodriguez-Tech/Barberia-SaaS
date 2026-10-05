import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { EmpresaModule } from './empresa/empresa.module.js';

@Module({
  imports: [PrismaModule, EmpresaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}