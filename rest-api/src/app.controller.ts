import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Request,
  Res,
  UseGuards
} from '@nestjs/common';
import { AppService } from './app.service';

import { MagicStrategy } from './magicstrategy';
import * as passport from 'passport';
import { AuthGuard } from '@nestjs/passport';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly magicStrategy: MagicStrategy
  ) {}

  @Post('/api/test')
  async maillogin(@Body() dto, @Req() req, @Res() res) {
    this.magicStrategy.send(req, res);
    console.log('pippo');
  }

  @Get('/api/magiclogin/callback')
  @UseGuards(AuthGuard('magiclogin'))
  async loginback(@Body() dto, @Req() req, @Res() res) {
    return;
  }
}
