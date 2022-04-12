import { Injectable } from '@nestjs/common';
import { Usuario } from '../../domain/entities/usuario.entity';
import { UsuariosService } from '../../domain/services/usuarios.service';
import { NovoUsuarioDto, UsuarioCadastradoDto } from '../dtos';

@Injectable()
export class UsuariosApplicationService {
  constructor(private readonly usuariosService: UsuariosService) {}

  async cadastra(
    novoUsuarioDto: NovoUsuarioDto,
  ): Promise<UsuarioCadastradoDto> {
    const usuario = await this.usuariosService.cadastra(
      new Usuario(novoUsuarioDto),
    );
    return new UsuarioCadastradoDto(usuario);
  }
}
