import { Usuario } from '../domain/entities/usuario.entity';

export const EMAIL = 'email@email.com';
export const SENHA = 'senha';

export const usuarioFactory = (): Usuario =>
  new Usuario({
    email: EMAIL,
    senha: SENHA,
  });
