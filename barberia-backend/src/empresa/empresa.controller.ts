import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmpresaService } from './empresa.service.js';
import { CrearEmpresaDto } from './dto/crear-empresa.dto.js';

@Controller('api/v1/empresas')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get()
  listar() {
    return this.empresaService.listar();
  }

  @Post()
  crear(@Body() dto: CrearEmpresaDto) {
    return this.empresaService.crear(dto);
  }
}