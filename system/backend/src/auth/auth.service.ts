import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LogInDto } from './dto/log-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';

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
  async signUp(signUpDto: SignUpDto) {
    const userEmail = /*await*/ this.usersService.findByEmail(signUpDto.email);
    // verifica se o cliente digitou um email já existente
    if (userEmail) {
      throw new ConflictException('Email já está em uso.');
    }
    // criptografa a senha digitada pelo cliente
    const hashedPassword = await bcrypt.hash(signUpDto.password, 10);
    
    const createUserDto: CreateUserDto = {
        ...signUpDto,
        password: hashedPassword,
    }

    // finalmente cria o cliente no banco de dados / memória
    this.usersService.create(createUserDto);
 }
    
}
