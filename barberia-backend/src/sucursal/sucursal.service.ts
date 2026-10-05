import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CrearSucursalDto } from './dto/crear-sucursal.dto.js';

@Injectable()
export class SucursalService {
  constructor(private readonly prisma: PrismaService) {}

  listar() {
    return this.prisma.sucursal.findMany();
  }

  async crear(dto: CrearSucursalDto) {
    const empresa = await this.prisma.empresa.findUnique({
      where: { id: dto.empresaId },
    });

    if (!empresa) {
      throw new NotFoundException('La empresa indicada no existe');
    }

    return this.prisma.sucursal.create({
      data: { nombre: dto.nombre, empresaId: dto.empresaId },
    });
  }
}