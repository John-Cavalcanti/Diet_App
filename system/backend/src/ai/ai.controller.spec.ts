import { Test, TestingModule } from '@nestjs/testing';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';

describe('AiController', () => {
  let controller: AiController;
  let mockAiService: any;

  beforeEach(async () => {
    mockAiService = {
      createDiet: jest.fn().mockReturnValue(null),
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiController],
      providers: [
        AiService
      ,
      {
        provide: AiService,
        useValue: mockAiService
      }
    ],
    }).compile();

    controller = module.get<AiController>(AiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
