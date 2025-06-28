import { IsDateString, Matches, IsEmail, IsString, IsNotEmpty, IsNumber, IsOptional, Length, MinLength} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
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
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsNumber()
  height: number;

  @IsNotEmpty()
  @IsString()
  workoutsFrequency: string;
  
  @IsNotEmpty()
  @IsString()
  goals: string;

  @IsOptional()
  @IsString()
  foodRestrictions?: string;

  @IsOptional()
  @IsString()
  foodPreferences?: string;
}
