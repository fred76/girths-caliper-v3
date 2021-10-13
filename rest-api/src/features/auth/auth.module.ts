import { AuthController } from './auth.controller';
import { MailModule } from './../mail/mail.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AppController } from 'src/app.controller';

@Module({
  providers: [AuthService],
  imports: [MailModule],
  controllers: [AuthController]
})
export class AuthModule {}
