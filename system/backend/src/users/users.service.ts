import { BadRequestException, ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    if (new Date(createUserDto.birthday) > new Date()) {
      throw new BadRequestException('Time traveler? Birhtday in the future?');
    }

    const userExists = await this.userRepository.findByEmail(createUserDto.email);
    if (userExists) {
      throw new BadRequestException('User with this email already exists');
    }

    const hashedPassword: string = await bcrypt.hash(createUserDto.password, 10);

    const user = new User({
      ...createUserDto,
      password: hashedPassword,
    });

    try{
      return await this.userRepository.CreateUser(user);
    }catch(error){
      throw new error;
    }
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number): Promise <User | undefined> {
    const user = await this.userRepository.findUserById(id);
    if (!user) {
      throw new NotFoundException('User with ID ' + id + ' not found');
    }
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findByEmail(email);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findUserById(id);
    if (!existingUser) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    if (updateUserDto.email && updateUserDto.email !== existingUser.email) {
      const userWithNewEmail = await this.userRepository.findByEmail(updateUserDto.email);
      if (userWithNewEmail && userWithNewEmail.id !== id) {
        throw new ConflictException('O novo e-mail já está em uso por outro usuário.');
      }
    }

    let hashedPassword = existingUser.password;
    if (updateUserDto.password) {
      hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
    }

    existingUser.name = updateUserDto.name ?? existingUser.name;
    existingUser.email = updateUserDto.email ?? existingUser.email;
    existingUser.password = hashedPassword;
    existingUser.birthday = updateUserDto.birthday ? new Date(updateUserDto.birthday) : existingUser.birthday;
    existingUser.height = updateUserDto.height ?? existingUser.height;
    existingUser.weight = updateUserDto.weight ?? existingUser.weight;
    existingUser.workoutsFrequency = updateUserDto.workoutsFrequency ?? existingUser.workoutsFrequency;
    existingUser.goals = updateUserDto.goals ?? existingUser.goals;
    existingUser.foodRestrictions = updateUserDto.foodRestrictions ?? existingUser.foodRestrictions;
    existingUser.foodPreferences = updateUserDto.foodPreferences ?? existingUser.foodPreferences;

    try {
      return await this.userRepository.updateUser(id, existingUser);
    } catch (error) {
      if (error && error.code === '23505' && error.detail?.includes('email')) {
        throw new ConflictException('O e-mail fornecido já está em uso.');
      }
      throw error;
    }
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

  private async encode(dto: UpdateUserDto): Promise<UpdateUserDto> {
    const hashedPassword: string = await bcrypt.hash(dto.password, 10);
    const updateUserDto: UpdateUserDto = {
      ...dto,
      password: hashedPassword,
    };
    return updateUserDto;
  }

  async remove(id: number) {
    return await this.userRepository.deleteById(id);
  }
}
