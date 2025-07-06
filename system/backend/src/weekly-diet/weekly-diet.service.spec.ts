import { Test, TestingModule } from '@nestjs/testing';
import { WeeklyDietService } from './weekly-diet.service';
import { UsersService } from '../users/users.service';
import { AiService } from '../ai/ai.service';
import { WeeklyDietRepository } from './weekly-diet.repository';
import { User } from '../users/entities/user.entity';
import { aiGeneratedText, weeklyDietExample } from './constants/constants';
import { WeeklyDiet } from './entities/weekly-diet.entity';
import { MealsService } from '../meals/meals.service';
import { BadRequestException } from '@nestjs/common';

describe('WeeklyDietService', () => {
  let service: WeeklyDietService;

  const mockUsersService = {
    findOne: jest.fn().mockReturnValue(
      new User({
        name: 'Fernanda Oliveira',
        email: 'fernanda.oliveira@example.com',
        password: 'SenhaForte2024',
        birthday: '1995-04-10',
        weight: 60,
        height: 167,
        workoutsFrequency: '5 vezes por semana',
        goals: 'Definir músculos e manter energia',
        foodRestrictions: 'Lactose, nozes',
        foodPreferences: 'Vegetariana, prefere pratos quentes no almoço',
      }),
    ),
  };

  const mockAiService = {
    groqGenerateWeeklyDiet: jest.fn().mockResolvedValue(aiGeneratedText),
  };

  const mockDietRepository = {
    createDiet: jest.fn().mockReturnValue(new WeeklyDiet(1, weeklyDietExample)),
    findWeeklyDietByUserId: jest
      .fn()
      .mockResolvedValue(new WeeklyDiet(1, weeklyDietExample)),
  };

  const mockMealsService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeeklyDietService,
        UsersService,
        AiService,
        WeeklyDietRepository,
        MealsService,
      ],
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)

      .overrideProvider(AiService)
      .useValue(mockAiService)

      .overrideProvider(WeeklyDietRepository)
      .useValue(mockDietRepository)

      .overrideProvider(MealsService)
      .useValue(mockMealsService)

      .compile();

    service = module.get<WeeklyDietService>(WeeklyDietService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Quando houver uma tentativa de criar um novo plano alimentar', () => {
    it('deveria retornar um objeto com a dieta completa quando passar por todos os filtros', async () => {
      expect(
        service.create({
          userId: 1,
        }),
      ).toBeInstanceOf(Object);
    });

    it('deveria lançar um bad request quando o usuário não existir', async () => {
      mockUsersService.findOne.mockReturnValueOnce(undefined);
      await expect(
        service.create({
          userId: 1,
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('deveria lançar um internal server error quando a resposta da IA não for válida', async () => {
      mockAiService.groqGenerateWeeklyDiet.mockResolvedValueOnce(
        'string invalida',
      );
      await expect(
        service.create({
          userId: 1,
        }),
      ).rejects.toThrow(Error);
    });
  });

});
