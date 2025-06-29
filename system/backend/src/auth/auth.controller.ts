/* eslint-disable prettier/prettier */
import { AuthService } from './auth.service';
import { Controller, Post, Get, HttpCode, HttpStatus, Body, Request, UseGuards } from '@nestjs/common';
import { LogInDto } from './dto/log-in.dto';
import { AuthGuard } from './auth.guard';
import { SignUpDto } from './dto/sign-up.dto';
import { ApiTags, ApiOperation, ApiAcceptedResponse, ApiOkResponse, ApiUnauthorizedResponse, ApiBadGatewayResponse, ApiBadRequestResponse } from '@nestjs/swagger';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Autentica o email e senha passados pelo usuário e retorna o token de acesso caso a autenticação não encontre nenhum erro.',
  })
  @ApiOkResponse({
    description: 'Usuário passou email e senha válidos.',
  })
  @ApiUnauthorizedResponse({
    description: 'Usuário passou email inexistente ou senha inválida / errada.',
  })
  @ApiBadRequestResponse({
    description: 'Usuário usou tipos de dados não compatíveis com os campos email ou senha ou não seguiu os padrões de senha.' 
  })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  logIn(@Body() logInDto: LogInDto) {
    return this.authService.logIn(logInDto);
}

  @ApiOperation({
    summary: '',
  })
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }


}