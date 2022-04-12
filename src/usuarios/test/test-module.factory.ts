import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosApplicationService } from '../application/services/usuarios-application.service';
import { Usuario } from '../domain/entities/usuario.entity';
import { UsuariosService } from '../domain/services/usuarios.service';

export abstract class TestModuleFactory {
  static create() {
    return Test.createTestingModule({
      providers: [UsuariosService, UsuariosApplicationService],
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Usuario],
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Usuario]),
      ],
    }).compile();
  }
}
