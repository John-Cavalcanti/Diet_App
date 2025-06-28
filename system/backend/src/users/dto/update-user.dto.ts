import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsDateString, IsEmail, IsNotEmpty, IsOptional, Length, IsString, MinLength, Matches } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
      message:
        'A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número',
    })
    password: string;

  @IsNotEmpty()
  @IsDateString()
  birthday: string;

  @IsNotEmpty()
  height: number;

  @IsNotEmpty()
  weight: number;

  @IsNotEmpty()
  workoutsFrequency: string;
  
  @IsNotEmpty()
  goals: string;
  
  @IsOptional()
  foodRestrictions?: string;

  @IsOptional()
  foodPreferences?: string;
}
