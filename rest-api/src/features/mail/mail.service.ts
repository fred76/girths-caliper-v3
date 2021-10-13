import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './../user/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(email: string, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService
      .sendMail({
        to: email,
        subject: 'Welcome to Nice App! Confirm your Email',
        template: './confirmation',
        context: {
          code: 'www.google.it',
          link: 'www.google.it',
          username: email,
          url
        }
      })
      .then((success) => {
        console.log(JSON.stringify(success) + ' 333333');
      })
      .catch((err) => {
        console.log(err + ' A A A A A A A A');
      });
  }
  async sendUserConfirmation2(destination: string, token: string) {
    const url = `http://localhost:4200/login?token=${token}`;

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
        console.log(err + ' A A A A A A A A');
      });
  }
}
