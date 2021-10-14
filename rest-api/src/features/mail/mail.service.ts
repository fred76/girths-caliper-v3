import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './../user/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation2(destination: string, token: string) {
    const url = `http://localhost:4200/login-back/${token}`;

    await this.mailerService
      .sendMail({
        to: destination,
        subject: 'Sign in to Girths & Caliper',
        template: './confirmation',
        context: {
          link: url,
          username: destination
        }
      })
      .then((success) => {})
      .catch((err) => {
        console.log(err + ' from mailerService/sendUserConfirmation2');
      });
  }
}
