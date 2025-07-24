import { Module } from '@nestjs/common';
import { WeeklyDietService } from './weekly-diet.service';
import { WeeklyDietController } from './weekly-diet.controller';
import { AiModule } from 'src/ai/ai.module';
import { UsersModule } from 'src/users/users.module';
import { WeeklyDietRepository } from './weekly-diet.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeeklyDiet } from './entities/weekly-diet.entity';

@Module({
  controllers: [WeeklyDietController],
  providers: [WeeklyDietService, WeeklyDietRepository],
  exports: [
    TypeOrmModule.forFeature([WeeklyDiet]),
    WeeklyDietService
  ],
  imports: [
    TypeOrmModule.forFeature([WeeklyDiet]),
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
  ]
})
export class WeeklyDietModule {}
