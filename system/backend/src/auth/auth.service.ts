/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LogInDto } from './dto/log-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UtilitariesService } from '../utilitaries/utilitaries.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly utilitariesService: UtilitariesService,
  ) {}

  async logIn(logInDto: LogInDto): Promise<{ access_token: string }> {
    const user = /*await*/ this.usersService.findByEmail(logInDto.email);
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const passwordValid = await bcrypt.compare(logInDto.password, user.getPassword());

    if (!passwordValid) {
      throw new UnauthorizedException('A senha está incorreta');
    }

    const payload = { sub: user?.getId(), email: user?.getEmail() };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: SignUpDto) {
    const user = /*await*/ this.usersService.findByEmail(signUpDto.email);
    // verifica se o cliente digitou um email já existente
    if (user) {
      throw new ConflictException('Email já está em uso.');
    }
    // criptografa a senha digitada pelo cliente
    const createUserDto: CreateUserDto = await this.utilitariesService.encode(signUpDto);

    // finalmente cria o cliente no banco de dados / memória
    this.usersService.create(createUserDto);

    return this.logIn({ email: signUpDto.email, password: signUpDto.password });
  }
}
