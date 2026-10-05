import { Controller, Get } from '@nestjs/common';
import { EmpresaService } from './empresa.service.js';

@Controller('api/v1/empresas')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get()
  listar() {
    return this.empresaService.listar();
  }
}