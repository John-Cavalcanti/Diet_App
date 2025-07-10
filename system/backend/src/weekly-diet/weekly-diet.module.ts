import { Module } from '@nestjs/common';
import { WeeklyDietService } from './weekly-diet.service';
import { WeeklyDietController } from './weekly-diet.controller';
import { MealsModule } from 'src/meals/meals.module';
import { AiModule } from 'src/ai/ai.module';
import { UsersModule } from 'src/users/users.module';
import { WeeklyDietRepository } from './weekly-diet.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UtilitariesModule } from 'src/utilitaries/utilitaries.module';

@Module({
  imports: [
    MealsModule,
    AiModule,
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '3600s' },
      }),
      inject: [ConfigService],
    }),
    UtilitariesModule,
  ],
  controllers: [WeeklyDietController],
  providers: [WeeklyDietService, WeeklyDietRepository],
})
export class WeeklyDietModule {}
