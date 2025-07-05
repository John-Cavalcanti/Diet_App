import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWeeklyDietDto {
  @ApiProperty({
    description:
      'Utilizado para criar a dieta baseaada nas informações ligadas ao respectivo ID',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
