import { Module } from '@nestjs/common';
import { WeeklyDietService } from './weekly-diet.service';
import { WeeklyDietController } from './weekly-diet.controller';
import { MealsModule } from 'src/meals/meals.module';
import { AiModule } from 'src/ai/ai.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MealsModule, AiModule, UsersModule],
  controllers: [WeeklyDietController],
  providers: [WeeklyDietService],
})
export class WeeklyDietModule {}
