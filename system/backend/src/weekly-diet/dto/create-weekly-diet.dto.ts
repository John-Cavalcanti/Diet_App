import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateWeeklyDietDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
