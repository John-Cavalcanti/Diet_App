import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LogInDto } from './dto/log-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async logIn(logInDto: LogInDto): Promise<{ access_token: string }> {
    const user = /*await*/ this.usersService.findByEmail(logInDto.email);
    if (user?.password !== logInDto.password) {
      // User não tem atributo password? vai ser necessário criar
      throw new UnauthorizedException();
    }
    const payload = { sub: user.getId(), email: user.getEmail() };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
}



}
