import { Entidade } from '../../../shared/entidades';
import { Entity, Column } from 'typeorm';

@Entity()
export class Usuario extends Entidade<Usuario> {
  @Column()
  email: string;
  @Column()
  senha: string;
}
