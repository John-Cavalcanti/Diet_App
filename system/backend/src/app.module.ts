import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WeeklyDietModule } from './weekly-diet/weekly-diet.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UtilitariesService } from './utilitaries/utilitaries.service';

@Module({
  imports: [
    UsersModule,
    WeeklyDietModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService, UtilitariesService],
})
export class AppModule {}
