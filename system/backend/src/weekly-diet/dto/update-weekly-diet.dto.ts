import { PartialType } from '@nestjs/mapped-types';
import { CreateWeeklyDietDto } from './create-weekly-diet.dto';

export class UpdateWeeklyDietDto extends PartialType(CreateWeeklyDietDto) {}
