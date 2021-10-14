import MagicLoginStrategy from 'passport-magic-login';
import { Injectable } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import * as passport from 'passport';

@Injectable()
export class MagicStrategy extends MagicLoginStrategy {
  constructor(private mailService: MailService) {
    super({
      secret: process.env.MAGIC_LINK_SECRET,
      callbackUrl: '',

      sendMagicLink: async (destination, href) => {
        console.log(destination);

        await this.mailService.sendUserConfirmation2(destination, href);
      },

      verify: (payload, callback) => {
        this.validate(payload, callback);
        console.log(payload);

      }
    });
    passport.use(this);
  }

  async validate(payload, callback): Promise<void> {

  }
}
