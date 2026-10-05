import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CrearSucursalDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre: string;

  @IsUUID()
  empresaId: string;
}