import { Usuario } from '../domain/entities/usuario.entity';

export const EMAIL = 'email@email.com';
export const SENHA = 'senha';

export const usuarioFactory = ({email = EMAIL, senha = SENHA}): Usuario =>
  new Usuario({
    email: EMAIL,
    senha: SENHA,
  });
