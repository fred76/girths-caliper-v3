import { verify } from 'jsonwebtoken';
import { PassportStrategy } from '@nestjs/passport';

import MagicLoginStrategy from 'passport-magic-login';
import { Injectable } from '@nestjs/common';
import { MailService } from './features/mail/mail.service';
import * as passport from 'passport';

@Injectable()
export class MagicStrategy extends MagicLoginStrategy {
  constructor(private mailService: MailService) {
    super({
      secret: process.env.MAGIC_LINK_SECRET,
      callbackUrl: 'http://localhost:9000/api/magiclogin/callback',

      sendMagicLink: async (destination, href) => {
        console.log(href);

        await this.mailService.sendUserConfirmation2(destination, href);
      },

      verify: (payload, callback) => {
        console.log(payload);
        console.log(callback + ' callback');
        this.validate(payload, callback);
        console.log('JJJJJ');
      }
    });
    passport.use(this);
  }

  async validate(payload, callback): Promise<void> {
    console.log(payload.destination);
  }
}
