import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { UtilitariesService } from 'src/utilitaries/utilitaries.service';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository,
    private readonly utilitariesService: UtilitariesService,
  ) {}
  create(createUserDto: CreateUserDto) {
    if (new Date(createUserDto.birthday) > new Date()) {
      throw new BadRequestException('Time traveler?');
    }
    const user = this.userRepository.CreateUser(new User(createUserDto));
    return user;
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number): User | undefined {
    if (id > this.userRepository.getUsersAmount()) {
      throw new BadRequestException();
    }
    return this.userRepository.findUserById(id);
  }

  findByEmail(email: string): User | undefined {
    return this.userRepository.findByEmail(email);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // eslint-disable-next-line prettier/prettier
    const dto: UpdateUserDto = await this.utilitariesService.encode(updateUserDto);
    if (!(await this.emailCheckUpdate(dto, id))) {
      throw new UnauthorizedException(
        'Não é permitido modificar informações de outros usuários',
      );
    }
    const user = this.userRepository.updateUser(id, new User(dto)); //
    return user;
  }

  private async emailCheckUpdate(
    dto: UpdateUserDto,
    id: number,
  ): Promise<boolean> {
    const user = await this.userRepository.findUserById(id);
    if (!user) {
      return false;
    }
    if (user.getEmail() != dto.email) {
      return false;
    }
    return true;
  }

  remove(id: number) {
    return this.userRepository.deleteById(id);
  }
}
