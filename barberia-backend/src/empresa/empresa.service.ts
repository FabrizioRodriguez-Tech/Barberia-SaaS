import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CrearEmpresaDto } from './dto/crear-empresa.dto.js';

@Injectable()
export class EmpresaService {
  constructor(private readonly prisma: PrismaService) {}

  listar() {
    return this.prisma.empresa.findMany();
  }

  crear(dto: CrearEmpresaDto) {
    return this.prisma.empresa.create({
      data: { nombre: dto.nombre },
    });
  }
}