import { Test, TestingModule } from '@nestjs/testing';
import { UtilitariesService } from './utilitaries.service';

describe('UtilitariesService', () => {
  let service: UtilitariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilitariesService],
    }).compile();

    service = module.get<UtilitariesService>(UtilitariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
