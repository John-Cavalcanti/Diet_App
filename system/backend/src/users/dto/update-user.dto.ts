import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Length,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'utilizado para atualizar o nome do usuário',
    example: 'Fernanda Oliveira',
  })
  @IsOptional()
  @Length(2, 50)
  name: string;

  @ApiProperty({
    description: 'utilizado para atualizar o email do usuário',
    example: 'fernanda.oliveira@example.com',
  })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'utilizado para atualizar a senha do usuário. deve ter ao menos 8 caracteres no geral, sendo 1 caractere minúsculo, 1 maiúsculo e 1 número',
    example: 'SenhaForte2024',
  })
  @IsOptional()
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message:
      'A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número',
  })
  password: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'utilizado para atualizar o dia de nascimento do usuário, e, logo, sua idade',
    example: '1995-04-10T00:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  birthday: string;

  @ApiProperty({
    description: 'utilizado para atualizar o peso (em Kg) do usuário',
    example: 60,
  })
  @IsOptional()
  weight: number;

  @ApiProperty({
    description: 'utilizado para atualizar a altura (em cm) do usuário',
    example: 167,
  })
  @IsOptional()
  height: number;

  @ApiProperty({
    description: 'descrição breve sobre a frequência de exercício do usuário',
    example: '5 vezes por semana',
  })
  @IsOptional()
  workoutsFrequency: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'descrição breve sobre os objetivos do usuário ao usar a plataforma',
    example: 'Definir músculos e manter energia',
  })
  @IsNotEmpty()
  goals: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'listagem dos alimentos e condimentos os quais o usuário tem restrição. É opcional, logo vazio implica em não há restrição',
    example: 'Lactose, nozes',
    required: false,
  })
  @IsOptional()
  foodRestrictions?: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'breve descrição sobre preferência alimentar do usuário. É opcional, logo vazio implica em não há preferência',
    example: 'Vegetariana, prefere pratos quentes no almoço',
    required: false,
  })
  @IsOptional()
  foodPreferences?: string;
}
