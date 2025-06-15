import { IsDateString, IsEmail, IsNotEmpty, IsOptional, Length } from "class-validator";

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
  weight: number;

  @IsNotEmpty()
  height: number;

  @IsNotEmpty()
  workoutsFrequency: string;
  
  @IsNotEmpty()
  goals: string;

  @IsOptional()
  foodRestrictions?: string;

  @IsOptional()
  foodPreferences?: string;
}
