import { Module } from '@nestjs/common';
import { UsuariosApplicationService } from './application/services/usuarios-application.service';
import { UsuariosService } from './domain/services/usuarios.service';
import { UsuariosController } from './usuarios.controller';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuariosApplicationService],
})
export class UsuariosModule {}
