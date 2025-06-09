import { IsDateString, IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @Length(2, 20)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDateString()
  birthday: string;

  @IsNotEmpty()
  genre: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  height: number;

  @IsNotEmpty()
  weight: number;
}
