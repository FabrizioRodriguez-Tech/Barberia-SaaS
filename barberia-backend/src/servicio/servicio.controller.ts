import { Body, Controller, Get, Post } from '@nestjs/common';
import { ServicioService } from './servicio.service.js';
import { CrearServicioDto } from './dto/crear-servicio.dto.js';

@Controller('api/v1/servicios')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  @Get()
  listar() {
    return this.servicioService.listar();
  }

  @Post()
  crear(@Body() dto: CrearServicioDto) {
    return this.servicioService.crear(dto);
  }
}
