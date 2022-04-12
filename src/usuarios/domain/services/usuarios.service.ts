import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Repository } from 'typeorm';
import { UsuarioJaCadastradoErro } from '../erros';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async cadastra(usuario: Usuario): Promise<Usuario> {
    await this.emailJaCadastrado(usuario.email);
    const usuarioCadastrado = await this.usuarioRepository.save(usuario);
    usuarioCadastrado.senha = undefined;
    return usuarioCadastrado;
  }

  private async emailJaCadastrado(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { email },
    });
    if (usuario) throw new UsuarioJaCadastradoErro();
    return usuario;
  }
}
