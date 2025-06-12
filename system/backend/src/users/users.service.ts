import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.CreateUser(new User(createUserDto));
    return user;
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.findUserById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.userRepository.updateUser(id, new User(updateUserDto));
    return user;
  }

  updateAgePlusOne(id: number) {
    const user = this.userRepository.updateUserAgePlusOne(id);
    return user;
  }

  remove(id: number) {
    return this.userRepository.deleteById(id);
  }
}
