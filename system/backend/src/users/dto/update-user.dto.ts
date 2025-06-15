import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsDateString, IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

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
