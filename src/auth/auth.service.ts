import { Injectable } from '@nestjs/common';
import { UserServices } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserServices) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getUser(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}