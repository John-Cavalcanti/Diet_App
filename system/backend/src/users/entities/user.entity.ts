import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";

export class User {
  private _name: string;
  private _email: string;
  private _birthday: Date;
  private _genre: string;
  private _age: number;
  private _height: number;
  private _weight: number;

  constructor(dto: CreateUserDto | UpdateUserDto) {
    this._name = dto.name;
    this._email = dto.email;
    this._birthday = new Date(dto.birthday);
    this._genre = dto.genre;
    this._age = dto.age;
    this._height = dto.height;
    this._weight = dto.weight;
  }

  getEmail(): string {
    return this._email;
  }

  setEmail(email: string): void {
    this._email = email;
  }

  getBirthday(): Date {
    return this._birthday;
  }

  setBirthday(birthday: Date): void {
    this._birthday = birthday;
  }

  getGenre(): string {
    return this._genre;
  }

  setGenre(genre: string): void {
    this._genre = genre;
  }

  getAge(): number {
    return this._age;
  }

  setAge(age: number): void {
    this._age = age;
  }

  getHeight(): number {
    return this._height;
  }

  setHeight(height: number): void {
    this._height = height;
  }

  getWeight(): number {
    return this._weight;
  }

  setWeight(weight: number): void {
    this._weight = weight;
  }


  getName(): string {
    return this._name;
  }

  setName(name: string): void {
    this._name = name;
  }



}
