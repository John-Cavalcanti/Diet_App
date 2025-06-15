import { Injectable } from '@nestjs/common';
import { CreateWeeklyDietDto } from './dto/create-weekly-diet.dto';
import { UpdateWeeklyDietDto } from './dto/update-weekly-diet.dto';

@Injectable()
export class WeeklyDietService {
  create(createWeeklyDietDto: CreateWeeklyDietDto) {
    return 'This action adds a new weeklyDiet';
  }

  findAll() {
    return `This action returns all weeklyDiet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} weeklyDiet`;
  }

  update(id: number, updateWeeklyDietDto: UpdateWeeklyDietDto) {
    return `This action updates a #${id} weeklyDiet`;
  }

  remove(id: number) {
    return `This action removes a #${id} weeklyDiet`;
  }
}
