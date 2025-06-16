import { Test, TestingModule } from '@nestjs/testing';
import { WeeklyDietService } from './weekly-diet.service';

describe('WeeklyDietService', () => {
  let service: WeeklyDietService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeeklyDietService],
    }).compile();

    service = module.get<WeeklyDietService>(WeeklyDietService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
