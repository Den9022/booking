import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findByEmail(email);

    if (user?.password == null) {
      return null;
    }

    if (user.password == password) {
      return user;
    }

    return null;
  }

  login(user: Omit<User, 'password'> | null) {
    if (user == null) {
      throw new Error('Invalid User');
    }

    return {
      access_token: this.jwtService.sign({
        sub: user.id,
      }),
    };
  }
}
