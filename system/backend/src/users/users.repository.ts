// src/users/users.repository.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersRepository {
  private id = 0;
  private readonly users: User[] = [];

  constructor(
    @InjectRepository(User)
    private readonly typeOrmRepository: Repository<User>,
  ) {}

  async getUsersAmount(): Promise<number> {
    try{
      return await this.typeOrmRepository.count();
    }catch(e)
    {
      throw new InternalServerErrorException('Failed to get users amount: ', e);
    }
  }


  async CreateUser(user: User): Promise<User>
  {
    try{
      const createdUser = await this.typeOrmRepository.save(user);
      return createdUser;
    }catch(e){
      throw new InternalServerErrorException('Failed to create user: ', e);
    }
  }

  async findUserById(id: number): Promise<User | undefined> {
    try{
      const user = await this.typeOrmRepository.findOne({where: { id}});
      return user ?? undefined;
    }catch(e){
      throw new InternalServerErrorException('Failed to find user: ', e);
    }
  }

  async findAll(): Promise<User[]> {
    try{
      const users = await this.typeOrmRepository.find();
      return users;
    }catch(e){
      throw new InternalServerErrorException('Failed to find all users: ', e);
    }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    try{
      const user = await this.typeOrmRepository.findOne({where: { email }});
      return user ?? undefined;
    }catch(e)
    {
      throw new InternalServerErrorException('Failed to find user by email: ', e);
    }
  }

  async updateUser(id: number, user: User): Promise<User> {
    try{
      user.id = id;
      const updatedUser = await this.typeOrmRepository.save(user);
      return updatedUser;
    }catch(e)
    {
      throw new InternalServerErrorException('Failed to update user with id ' + id + '  : ', e);
    }
  }

  async deleteById(id: number) {
    try{
      const result = await this.typeOrmRepository.delete(id);
      if(result.affected === 0)
      {
        throw new InternalServerErrorException('User with ID ' + id + ' not found');
      }
    }catch(e)
    {
      throw new InternalServerErrorException('Failed to delete user with id ' + id + '  : ', e);
    }
  }
}
