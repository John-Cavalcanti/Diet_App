// src/users/users.repository.ts
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  private id = 0;
  private readonly users: User[] = [];

  getUsersAmount() {
    return this.users.length;
  }

  CreateUser(user: User): User {
    user.setId(++this.id); // lógica para mimificar auto increment do bd
    this.users.push(user);
    return user;
  }

  findUserById(id: number): User | undefined {
    return this.users.find((user) => user.getId() === id);
  }

  findAll(): User[] {
    return this.users;
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.getEmail() === email);
  }

  updateUser(id: number, user: User): User {
    const index = this.users.findIndex((user) => user.getId() === id);
    this.users[index] = user;
    user.setId(id);
    // quando update é usado, não é verificado se as informações "destino" já existem no banco de dados, deixando uma brecha para dois usuários com mesmo email
    return user;
  }

  deleteById(id: number) {
    const index = this.users.findIndex((user) => user.getId() === id);
    const user = this.users[index];
    this.users.splice(index, 1);
    return user;
  }
}
