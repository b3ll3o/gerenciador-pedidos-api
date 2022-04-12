import { Objeto } from '../../../shared/entidades';

export class UsuarioCadastradoDto extends Objeto<UsuarioCadastradoDto> {
  id: number;
  email: string;
}
