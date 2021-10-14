import { AuthController } from './auth.controller';
import { MailModule } from './../mail/mail.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MagicStrategy } from './magicstrategy';
import MagicLoginStrategy from 'passport-magic-login';

@Module({
  imports: [
    MailModule,
    PassportModule.register({
      defaultStrategy: 'magiclogin'
    })
  ],
  providers: [ MagicStrategy],
  controllers: [AuthController],
  exports: [MagicStrategy]
})
export class AuthModule {}
