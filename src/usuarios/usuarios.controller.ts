import { Body, Controller, Post } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dtos';
import { UsuariosApplicationService } from './application/services/usuarios-application.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosApplicationService: UsuariosApplicationService,
  ) {}

  @Post()
  async cadastra(
    @Body() novoUsuarioDto: NovoUsuarioDto,
  ): Promise<UsuarioCadastradoDto> {
    return this.usuariosApplicationService.cadastra(novoUsuarioDto);
  }
}
