import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CrearEmpresaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;
}