/* eslint-disable prettier/prettier */
import { AuthService } from './auth.service';
import { Controller, Post, Get, HttpCode, HttpStatus, Body, Request, UseGuards } from '@nestjs/common';
import { LogInDto } from './dto/log-in.dto';
import { AuthGuard } from './auth.guard';
import { SignUpDto } from './dto/sign-up.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthSwaggerDocsLogIn } from '../../test/decorators/authdecorators/decorators/auth-swagger-login.decorators';
import { AuthSwaggerDocsSignUp } from '../../test/decorators/authdecorators/decorators/auth-swagger-signup.decorators';
import { AuthSwaggerDocsProfile } from '../../test/decorators/authdecorators/decorators/auth-swagger-profile.decorators';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @AuthSwaggerDocsLogIn()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  logIn(@Body() logInDto: LogInDto) {
    return this.authService.logIn(logInDto);
  }

  @AuthSwaggerDocsProfile()
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @AuthSwaggerDocsSignUp()
  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }


}