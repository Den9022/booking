import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/user.service';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  //constructor(private usersService: UsersService) {}
  /*async login(user: User) {
    if (!this.usersService.findByEmailAndPassword(user.email, user.password)) {
      throw new UnauthorizedException();
    }
  }*/
}
