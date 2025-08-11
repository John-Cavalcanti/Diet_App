import { Test, TestingModule } from '@nestjs/testing';
import { AiService } from './ai.service';
import { AiWebService } from './ai.webservice';
import { UtilitariesService } from '../utilitaries/utilitaries.service';

describe('AiService', () => {
  let service: AiService;
  let mockAiWebService: {
    generateSomething: jest.Mock;
    groqGenerateWeeklyDiet: jest.Mock;
  };
  const mockUtilitariesService = {
    interpolateTemplate: jest
      .fn()
      .mockReturnValue('Prompt que será enviado ao llm'),
  };

  beforeEach(async () => {
    mockAiWebService = {
      generateSomething: jest.fn().mockReturnValue(null),
      groqGenerateWeeklyDiet: jest.fn().mockReturnValue(null),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AiService,
        {
          provide: AiWebService,
          useValue: mockAiWebService,
        },
        UtilitariesService,
      ],
    })

      .overrideProvider(UtilitariesService)
      .useValue(mockUtilitariesService)

      .compile();

    service = module.get<AiService>(AiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
