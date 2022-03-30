import { Controller, Request, Response, Post, UseGuards } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { AuthService } from './auth.service';

import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'admin@admin.com',
        },
        password: {
          type: 'string',
          example: 'pass123',
        },
      },
    },
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Response() res) {
    try {
      const accessToken = this.authService.login(req.user);
      return res.status(200).json(accessToken);
    } catch (err) {
      return res.status(403);
    }
  }
}
