import { TestingModule } from '@nestjs/testing';
import { EMAIL, usuarioFactory, TestModuleFactory } from '../../test';
import { Connection, getConnection } from 'typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuarioJaCadastradoErro } from '../erros';

describe('UsuariosService', () => {
  let service: UsuariosService;
  let connection: Connection;

  beforeEach(async () => {
    const module: TestingModule = await TestModuleFactory.create();

    service = module.get<UsuariosService>(UsuariosService);
    connection = getConnection();
  });

  afterEach(async () => {
    await connection.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('cadastraNovoUsuario', () => {
    it('deve retorna um usuario com id', async () => {
      const usuario = await service.cadastra(usuarioFactory());
      expect(usuario.id).not.toBeUndefined();
      expect(usuario.id).not.toBeNull();
    });

    it('deve retorna um usuario cadastrado com o mesmo email passado', async () => {
      const usuario = await service.cadastra(usuarioFactory());
      expect(usuario.email).toBe(EMAIL);
    });

    it('deve retorna um usuario csem senha', async () => {
      const usuario = await service.cadastra(usuarioFactory());
      expect(usuario.senha).toBeUndefined();
    });

    it('não deve ser possivel cadastrar dois usuarios com o mesmo email', async () => {
      await service.cadastra(usuarioFactory());
      await expect(service.cadastra(usuarioFactory())).rejects.toThrow(
        UsuarioJaCadastradoErro,
      );
    });
  });
});
