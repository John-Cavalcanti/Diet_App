/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { WeeklyDiet } from './entities/weekly-diet.entity';

@Injectable()
export class WeeklyDietRepository {
  private id = 0;
  private readonly weeklyDiets: WeeklyDiet[] = [];

  createDiet(weeklyDiet: WeeklyDiet): WeeklyDiet {
    weeklyDiet.setId(++this.id); // lógica para mimificar auto increment do bd
    this.weeklyDiets.push(weeklyDiet);
    return weeklyDiet;
  }

  findWeeklyDietByUserId(id: number) {
    return this.weeklyDiets.find(diet => diet.getId() === id);
  }
}
