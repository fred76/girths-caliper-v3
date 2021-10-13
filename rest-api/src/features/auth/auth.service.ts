import { Injectable } from '@nestjs/common';
import { MailService } from './../mail/mail.service';
import { User } from './../user/user.entity';

@Injectable()
export class AuthService {
  constructor(private mailService: MailService) {}

  async signUp(email: string) {
    console.log('WWWWW');
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    await this.mailService.sendUserConfirmation(email, token);
  }
}
