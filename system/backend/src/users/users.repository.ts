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

  updateUser(id: number, user: User): User
  {
    this.users[id] = user;
    return user;
  }

  updateUserAgePlusOne(id: number)
  {
    this.users[id].setAge(this.users[id].getAge() + 1);
    return this.users[id];
  }

  deleteById(id: number)
  {
    const user = this.users[id];
    this.users.splice(id, 1);
    return user;
  }
}
