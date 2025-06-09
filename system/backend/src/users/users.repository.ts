// src/users/users.repository.ts
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  private readonly users: User[] = [];

  CreateUser(user: User): User {
    this.users.push(user);
    return user;
  }

  findUserById(id: number): User | undefined {
    return this.users[id];
  }

  findAll(): User[] {
    return this.users;
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(user => user.getEmail() === email);
  }
}
