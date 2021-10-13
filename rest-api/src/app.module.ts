import { MagicStrategy } from './magicstrategy';
import { TestDB } from './testdb';
import { AppController } from 'src/app.controller';
import { AuthModule } from './features/auth/auth.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import MagicLoginStrategy from 'passport-magic-login';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true // no need to import into other modules
    }),
    AuthModule,
    PassportModule.register({
      defaultStrategy: 'magiclogin'
    })
  ],
  controllers: [AppController],
  providers: [MagicStrategy, AppService, TestDB],
  exports: [MagicStrategy]
})
export class AppModule {}
