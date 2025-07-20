// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '../auth/auth.guard';
import { UsersDocsCreate } from './decorators/users-swagger-create.decorators';
import { UsersDocsFindOne } from './decorators/users-swagger-findone.decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsersDocsCreate()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @UsersDocsFindOne()
  //@UseGuards(AuthGuard)
  @Get('me')
  findOne(@Request() req) {
    return this.usersService.findOne(req.user.sub);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
