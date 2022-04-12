import { Module } from '@nestjs/common';
import { UsuariosApplicationService } from './application/services/usuarios-application.service';
import { UsuariosService } from './domain/services/usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './domain/entities/usuario.entity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, UsuariosApplicationService],
  imports: [TypeOrmModule.forFeature([Usuario])],
})
export class UsuariosModule {}
