import { Test, TestingModule } from '@nestjs/testing';
import { WeeklyDietController } from './weekly-diet.controller';
import { WeeklyDietService } from './weekly-diet.service';

describe('WeeklyDietController', () => {
  let controller: WeeklyDietController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeeklyDietController],
      providers: [WeeklyDietService],
    }).compile();

    controller = module.get<WeeklyDietController>(WeeklyDietController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
