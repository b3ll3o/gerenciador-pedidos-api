import { BadRequestException } from '@nestjs/common';

export class UsuarioJaCadastradoErro extends BadRequestException {
  constructor() {
    super('Usuário já cadastrado');
  }
}
