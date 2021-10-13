import { AuthService } from './auth.service';
import { User } from './../user/user.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/api/login')
  async mail(@Body() changes: User) {
    console.log('AAA');
  }
}
