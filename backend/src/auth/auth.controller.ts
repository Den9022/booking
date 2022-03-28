import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /*@Post() login(@Body() user: User) {
    return this.authService.login(user);
  }*/
}
