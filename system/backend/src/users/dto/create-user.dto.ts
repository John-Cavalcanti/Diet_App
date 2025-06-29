/* eslint-disable prettier/prettier */
import {
  IsDateString,
  Matches,
  IsEmail,
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'utilizado para definir o nome do usuário',
    example: 'Fernanda Oliveira',
  })
  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  name: string;

  @ApiProperty({
    description: 'utilizado para definir o email do usuário',
    example: 'fernanda.oliveira@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'utilizado para definir a senha do usuário',
    example: 'SenhaForte2024',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message:
      'A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número',
  })
  password: string;

  @ApiProperty({
    description: 'utilizado para definir o dia de nascimento do usuário, e, logo, sua idade',
    example: '1995-04-10T00:00:00.000Z',
  })
  @IsNotEmpty()
  @IsDateString()
  birthday: string;

  @ApiProperty({
    description: 'utilizado para definir o peso (em Kg) do usuário',
    example: 60,
  })
  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @ApiProperty({
    description: 'utilizado para definir a altura (em cm) do usuário',
    example: 167,
  })
  @IsNotEmpty()
  @IsNumber()
  height: number;

  @ApiProperty({
    description: 'descrição breve sobre a frequência de exercício do usuário',
    example: '5 vezes por semana',
  })
  @IsNotEmpty()
  @IsString()
  workoutsFrequency: string;

  @ApiProperty({
    description: 'descrição breve sobre os objetivos do usuário ao usar a plataforma',
    example: 'Definir músculos e manter energia',
  })
  @IsNotEmpty()
  @IsString()
  goals: string;

  @ApiProperty({
    description: 'listagem dos alimentos e condimentos os quais o usuário tem restrição. É opcional, logo vazio implica em não há restrição',
    example: 'Lactose, nozes',
  })
  @IsOptional()
  @IsString()
  foodRestrictions?: string;

  @ApiProperty({
    description: 'breve descrição sobre preferência alimentar do usuário. É opcional, logo vazio implica em não há preferência',
    example: 'Vegetariana, prefere pratos quentes no almoço',
  })
  @IsOptional()
  @IsString()
  foodPreferences?: string;
}
