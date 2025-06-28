import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

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

  findOne(id: number): User | undefined {
    return this.userRepository.findUserById(id);
  }

  findByEmail(email: string): User | undefined {
    return this.userRepository.findByEmail(email);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const dto: UpdateUserDto = await this.encode(updateUserDto);
    const user = this.userRepository.updateUser(id, new User(dto));
    // após update, o id do usuário fica null. necessário corrigir isso
    return user;
  }

  async encode(dto: UpdateUserDto): Promise<UpdateUserDto> {
    const hashedPassword: string = await bcrypt.hash(dto.password, 10);
    const updateUserDto: UpdateUserDto = {
      ...dto,
      password: hashedPassword,
    };
    return updateUserDto;
  }

  remove(id: number) {
    return this.userRepository.deleteById(id);
  }
}
