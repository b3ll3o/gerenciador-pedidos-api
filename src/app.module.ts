import { Module } from '@nestjs/common';
import { join } from 'path';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_PIPE } from '@nestjs/core';
import { ValidadorPipe } from './shared/pipes';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsuariosModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidadorPipe,
    },
  ],
})
export class AppModule {}
