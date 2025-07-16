// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request, Patch } from '@nestjs/common';
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

  @UsersDocsFindOne()
  @UseGuards(AuthGuard)
  @Get('me')
  findOne(@Request() req) {
    return this.usersService.findOne(req.user.sub);
  }

  @UseGuards(AuthGuard)
  @Patch('update')
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(req.user.sub, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
