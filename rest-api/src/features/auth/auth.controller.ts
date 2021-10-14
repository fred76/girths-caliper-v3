import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards
} from '@nestjs/common';

import { MagicStrategy } from './magicstrategy';
import { AuthGuard } from '@nestjs/passport';
@Controller()
export class AuthController {
  constructor(
    private readonly magicStrategy: MagicStrategy
  ) {}

  @Post('/api/test')
  async maillogin(@Req() req, @Res() res) {
    this.magicStrategy.send(req, res);
  }

  @Get('/api/magiclogin/callback')
  @UseGuards(AuthGuard('magiclogin'))
  async loginback() {
    return;
  }
}
