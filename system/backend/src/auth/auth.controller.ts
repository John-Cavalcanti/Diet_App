import { AuthService } from './auth.service';
import { Controller, Post, Get, HttpCode, HttpStatus, Body, Request, UseGuards } from '@nestjs/common';
import { LogInDto } from './dto/log-in.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  logIn(@Body() logInDto: LogInDto) {
    return this.authService.logIn(logInDto);
}

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }



}