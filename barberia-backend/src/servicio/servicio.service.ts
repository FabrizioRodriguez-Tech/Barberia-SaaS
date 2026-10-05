import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CrearServicioDto } from './dto/crear-servicio.dto.js';

@Injectable()
export class ServicioService {
  constructor(private readonly prisma: PrismaService) {}

  listar() {
    return this.prisma.servicio.findMany();
  }

  async crear(dto: CrearServicioDto) {
    const empresa = await this.prisma.empresa.findUnique({
      where: { id: dto.empresaId },
    });

    if (!empresa) {
      throw new NotFoundException('La empresa indicada no existe');
    }

    return this.prisma.servicio.create({
      data: {
        nombre: dto.nombre,
        duracionMin: dto.duracionMin,
        precio: dto.precio,
        empresaId: dto.empresaId,
      },
    });
  }
}
