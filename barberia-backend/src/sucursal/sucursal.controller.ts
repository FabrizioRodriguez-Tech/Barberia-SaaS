import { Body, Controller, Get, Post } from '@nestjs/common';
import { SucursalService } from './sucursal.service.js';
import { CrearSucursalDto } from './dto/crear-sucursal.dto.js';

@Controller('api/v1/sucursales')
export class SucursalController {
  constructor(private readonly sucursalService: SucursalService) {}

  @Get()
  listar() {
    return this.sucursalService.listar();
  }

  @Post()
  crear(@Body() dto: CrearSucursalDto) {
    return this.sucursalService.crear(dto);
  }
}